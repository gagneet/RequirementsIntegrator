﻿ // --------------------------------------------------------------------
 // <copyright file="adapters.ts">
 //    This code is licensed under the MIT License.
 //    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
 //    ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 //    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 //    PARTICULAR PURPOSE AND NONINFRINGEMENT.
 // </copyright>
 // <summary>A collection of interfaces and classes used to define requirements
 // data sources.
 // </summary>
 // ---------------------------------------------------------------------
/// <reference path="services.ts" />

import Services = require("services");
import Storage = require("storage");
import CommonControls = require("VSS/Controls/Notifications");
import Common = require("common");

    export interface HTMLFileElement extends HTMLElement {
        files: FileList;
    }

    export interface IRequirementsSourceAdapter {
        store: Storage.IStorageProvider;
        process(e: any, callback: Function);
    }

    declare let FileReader: {
        new ();
        readAsBinaryString(f);
    };

    export class FlatFileAdapter implements IRequirementsSourceAdapter {
        public store: Storage.IStorageProvider;
        private msg: Services.MessageService;
        private projectId: string;

        public constructor(dataStore?: Storage.IStorageProvider) {
            this.store = dataStore == null ? new Storage.LocalStorageAdapter() : dataStore;
            this.msg = new Services.MessageService();
            this.projectId = VSS.getWebContext().project.id;
        }

        public process(e: HTMLFileElement, callback: Function) {
            let self = this;
            let files = e.files;
            let i, f;
            f = files[0];
            let reader = new FileReader();
            let name = f.name;

            reader.onload = (e: any) => {
                let data = e.target.result;
                try {
                    let workbook = XLSX.read(data, { type: "binary" });
                    /* DO SOMETHING WITH workbook HERE */
                    let sheetNameList = workbook.SheetNames;

                    sheetNameList.forEach((y) => { /* iterate through sheets */
                        let worksheet = workbook.Sheets[y];
                        let src = XLSX.utils.sheet_to_json(worksheet);
                        let collection = new Common.RequirementCollection(JSON.stringify(src));
                        self.store.setCollection(self.projectId + "-requirements", collection.toString());
                        if (callback) {
                            callback();
                        }
                    });

                } catch (ex) {
                    self.msg.displayMessage(ex.message, CommonControls.MessageAreaType.Error);
                }
            };
            reader.readAsBinaryString(f);
        }
    }

    export class RepositoryAdapter implements IRequirementsSourceAdapter {
        public store: Storage.IStorageProvider;
        public process(e: any) { }
    }
