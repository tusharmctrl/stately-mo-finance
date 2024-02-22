import {
  setup,
  fromPromise,
  createMachine,
  assign,
  fromCallback,
  sendTo,
} from "xstate";
type EntityType = {
  id: string;
  name: string;
};
type Input = {
  products: EntityType[];
  services: EntityType[];
};
export const machine = setup({
  types: {
    context: {} as {
      encounterId: string;
      products: EntityType[];
      services: EntityType[];
    },
    input: {} as {
      encounterId: string;
      products: EntityType[];
      services: EntityType[];
    },
    events: {} as
      | { type: "VatAdded" }
      | { type: "NameTyped" }
      | { type: "PriceAdded" }
      | { type: "DiscountAdded" }
      | { type: "LineItemAdded" }
      | { type: "QuantityAdded" }
      | { type: "AddNewLineItem" }
      | { type: "DiagnosisAdded" }
      | { type: "ModifiersAdded" }
      | { type: "RemoveLineItem" }
      | { type: "LineItemRemoved" }
      | { type: "DiagnosisRemoved" }
      | { type: "DiagnosisSelected" }
      | { type: "NamedServiceFetched" }
      | { type: "AddDiagnosisSelected" }
      | { type: "NamedProductsFetched" }
      | { type: "ManageProductSelected" }
      | { type: "ManageServiceSelected" }
      | { type: "HandleDiagnosisSelected" }
      | { type: "HandleLineItemsSelected" }
      | { type: "RemoveDiagnisisSelected" }
      | { type: "InvoiceSuccessfullyCreated" }
      | { type: "InvoiceCreationFailed" }
      | { type: "SubmitInvoiceButtonClicked" },
  },
  actions: {
    removeProductFromState: (context, params: unknown) => {
      console.log(context, params);
    },
    addProductToState: (context, params: unknown) => {
      alert("Okay I executed!");
      console.log(params);
    },
  },
  actors: {
    loadEncounterDataInLineItems: fromPromise(async () => {
      return true;
    }),
    encounterFailedToFetch: createMachine({}),
    saveInvoiceToDatabase: fromPromise(
      async ({ input }: { input: { userId: string } }) => {
        alert(input.userId);
      }
    ),
    getDataEncounterData: fromPromise(
      async ({ input }: { input: { encounterId: string } }) => {
        // We will be bringing data from our hasura server through this encounterId
      }
    ),
  },
  schemas: {
    events: {
      "": {
        type: "object",
        properties: {},
      },
      VatAdded: {
        type: "object",
        properties: {},
      },
      NameTyped: {
        type: "object",
        properties: {},
      },
      PriceAdded: {
        type: "object",
        properties: {},
      },
      DiscountAdded: {
        type: "object",
        properties: {},
      },
      LineItemAdded: {
        type: "object",
        properties: {},
      },
      QuantityAdded: {
        type: "object",
        properties: {},
      },
      AddNewLineItem: {
        type: "object",
        properties: {},
      },
      DiagnosisAdded: {
        type: "object",
        properties: {},
      },
      ModifiersAdded: {
        type: "object",
        properties: {},
      },
      RemoveLineItem: {
        type: "object",
        properties: {},
      },
      LineItemRemoved: {
        type: "object",
        properties: {},
      },
      DiagnosisRemoved: {
        type: "object",
        properties: {},
      },
      DiagnosisSelected: {
        type: "object",
        properties: {},
      },
      NamedServiceFetched: {
        type: "object",
        properties: {},
      },
      AddDiagnosisSelected: {
        type: "object",
        properties: {},
      },
      NamedProductsFetched: {
        type: "object",
        properties: {},
      },
      ManageProductSelected: {
        type: "object",
        properties: {},
      },
      ManageServiceSelected: {
        type: "object",
        properties: {},
      },
      HandleDiagnosisSelected: {
        type: "object",
        properties: {},
      },
      HandleLineItemsSelected: {
        type: "object",
        properties: {},
      },
      RemoveDiagnisisSelected: {
        type: "object",
        properties: {},
      },
      SubmitInvoiceButtonClicked: {
        type: "object",
        properties: {},
      },
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QFlIEsDGBDANgAgHkMwsA7PAMTVLIzVzwAUcsAXAMwHsAnAWwDoAoqQycArqVZhuwiJADEETqTD9qAN04BrVTk5YIw0RKncAImywBJUgBlqYK1N6wA2gAYAuolAAHTrBorGjKPiAAHogALADMAOz8AJxxAGwArGkAHPFZ2WkANCAAnogAjDHuAEz8GWmliWnuKVHppZkAvu2FqBCYDEQk5FQ0IvT4zGxcfEIi4pLSsgrS3Dz8viwcPAJ6BkZzphas1nYOTmAuHt5IIP6BwaHXkQixCcnpWTmZeYUlCOVRiX4MTSiUyKXBX3SUUqnW66Gw+AGZEo1FoYyYGymAnsKkOWAAgqQIGZ6FBSAE0LBGJxfGINgoAMpiABGvCCNk0mDAACExKxWMoAMI4TA6CCXMK3IIhUhhJ5RJqlfgtFLuVIpGLlTItH6IRIpaqVdzZJoxBWJdyg2EgHp9RHEZHDNEMCabaY4sB4wnE0nkwJUml0tgKAASZAgODAHrOLgZYEjGCk4q8kop91ljzKmSVcRiDSiUVKcUSlSi2ZSur+mXcSSicUy+v1arScXK1ttCMIDqGqNGLsxW34Hq9RJJWDJFIDtPpEHkYaJkbHE-9cYTSYl1yl6blZTi1QVMVVlUy6oNTUrDUBcWNFQ15stHS6Nvh-W7KJGdH7k0Hgu4JCkHKcFyijKKoGjaKosBYOojikJyxAbn4aYyjuzxtPwRZtGCcR1F8pSVJWpQpBa-BxLE1b4VEGSVFaT4dq+gzvs64wDtMv7-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-D+X9wHNO5Db-USoIo0RaCDJo6Rv3AtwU3Vs2ucK65hMTo12X6vk+R0-IX496EBPspb8Pkfq41GVcWPcEMZnruBSeDCjQPfagVG0H32faN1bA587Rf89FNf2RhxAPNKyOJLPUPauY8xet90J-Ppfhs-eM3mE5DRfrKqQZj65TRqg3LqDRME0JZoL7J-4lZN7gki7N+LqAdTrer9QrEQExFd6z53w3a5uTFUWlcXUDhMaHEOfnnpfoEqspSA0gYE0n-AAjbh3BhF3A2JkrVA2DkmMhkpaMCEWI0CeKAWBjUhAdflAespAbAJshgGKDbvhC2PwE3PULEE7ITiWBgYCFgQAbgcAQQX4p8ivs1sZrEJzI2rkHtC0M7ADLCmdscrELvHWPUDwUjkenGgKmetajQQWPuBIsCM0NeCqHEI3McjUHuFMnmBDPqIofzhBlBmoX2tZMSmABoSRBgjoXWPFk7EfEDC2GdspIrmDJYYetYaeghqKmwDQThG-kWKWLVPgl3J4VzN4fgltH4a5sBu5nzoEcel2sEeeras6vsDblVt7M2AfLFq3vEd0nuEkelnHgEe2kEfGiESmmmueoUcqoCGdkWkdsCGdhUYkb4egv4d3uphkfUVkZBjkdav4uOkOiOtwMPvmqhK+t7CaBzLvBImxu+gkVUQMbUcMekQbpkSoT2rYcKpeuQYUaCK8HFieGgW0KqJsTdpUT4ckYMakf1vuovuBuMTYSEbBvBueozs-u5MqnQbNGCJ0ZFqWOrk8f0a8XsZ0EAA */
  context: ({ input }) => {
    return {
      products: input.products,
      services: input.services,
      encounterId: input?.encounterId,
    };
  },
  id: "Medical Ocean Financial Platform",
  initial: "EncounterEnded",
  states: {
    EncounterEnded: {
      invoke: {
        id: "loadEncounterDataInLineItems",
        input: {},
        onDone: {
          target: "LineDataAndDiagnosisPopulated",
        },
        onError: {
          target: "FetchingEncounterFailed",
        },
        src: "loadEncounterDataInLineItems",
      },
    },
    LineDataAndDiagnosisPopulated: {
      on: {
        SubmitInvoiceButtonClicked: {
          target: "CreateInvoice",
        },
        HandleLineItemsSelected: {
          target: "LineItems",
        },
        HandleDiagnosisSelected: {
          target: "Diagnosis",
        },
      },
    },
    FetchingEncounterFailed: {
      invoke: {
        id: "Medical Ocean Financial Platform.FetchingEncounterFailed:invocation[0]",
        input: {},
        src: "encounterFailedToFetch",
      },
    },
    CreateInvoice: {
      invoke: {
        id: "saveInvoice",
        input: ({ context: { encounterId } }) => ({ encounterId: encounterId }),
        src: "getDataEncounterData",
        onDone: {
          target: "InvoiceSuccessfullyCreated",
        },
        onError: {
          target: "InvoiceCreationFailed",
        },
      },
    },
    LineItems: {
      on: {
        AddNewLineItem: {
          target: "Add New Line Item",
        },
        RemoveLineItem: {
          target: "RemoveItemFromLineItems",
        },
      },
    },
    Diagnosis: {
      on: {
        AddDiagnosisSelected: {
          target: "AddNewDiagnosis",
        },
        RemoveDiagnisisSelected: {
          target: "RemoveDiagnosis",
        },
      },
    },
    InvoiceSuccessfullyCreated: {},
    InvoiceCreationFailed: {},
    "Add New Line Item": {
      initial: "SelectEntityToBeAdded",
      states: {
        SelectEntityToBeAdded: {
          on: {
            ManageProductSelected: {
              actions: [{ type: "addProductToState", params: { data: 22 } }],
              target: "StartTypingProductName",
            },
            ManageServiceSelected: {
              target: "StartTypingServiceName",
            },
          },
        },
        StartTypingProductName: {
          on: {
            NameTyped: {
              target: "LoadProudctsFromDB",
            },
          },
        },
        StartTypingServiceName: {
          on: {
            NameTyped: {
              target: "LoadNewServiceFromDB",
            },
          },
        },
        LoadProudctsFromDB: {
          on: {
            NamedProductsFetched: {
              target:
                "#Medical Ocean Financial Platform.AddInformationToEntity",
            },
          },
        },
        LoadNewServiceFromDB: {
          on: {
            NamedServiceFetched: {
              target:
                "#Medical Ocean Financial Platform.AddInformationToEntity",
            },
          },
        },
      },
    },
    RemoveItemFromLineItems: {
      on: {
        LineItemRemoved: {
          target: "LineDataAndDiagnosisPopulated",
        },
      },
    },
    AddNewDiagnosis: {
      initial: "StartTypingDiagnosisName",
      states: {
        StartTypingDiagnosisName: {
          on: {
            NameTyped: {
              target: "LoadDiagnosisFromDB",
            },
          },
        },
        LoadDiagnosisFromDB: {
          on: {
            DiagnosisSelected: {
              target: "AddDiagnosisClicked",
            },
          },
        },
        AddDiagnosisClicked: {
          on: {
            DiagnosisAdded: {
              target:
                "#Medical Ocean Financial Platform.LineDataAndDiagnosisPopulated",
            },
          },
        },
      },
    },
    RemoveDiagnosis: {
      on: {
        DiagnosisRemoved: {
          target: "LineDataAndDiagnosisPopulated",
        },
      },
    },
    AddInformationToEntity: {
      initial: "AddPrice",
      states: {
        AddPrice: {
          on: {
            PriceAdded: {
              target: "AddVat",
            },
          },
        },
        AddVat: {
          on: {
            VatAdded: {
              target: "AddDiscount",
            },
          },
        },
        AddDiscount: {
          on: {
            DiscountAdded: {
              target: "AddQuantity",
            },
          },
        },
        AddQuantity: {
          on: {
            QuantityAdded: {
              target: "AddModifiers",
            },
          },
        },
        AddModifiers: {
          on: {
            ModifiersAdded: {
              target: "SelectDiagnosis",
            },
          },
        },
        SelectDiagnosis: {
          on: {
            DiagnosisSelected: {
              target: "InfoForEntityAdded",
            },
          },
        },
        InfoForEntityAdded: {
          on: {
            LineItemAdded: {
              target:
                "#Medical Ocean Financial Platform.LineDataAndDiagnosisPopulated",
            },
          },
        },
      },
    },
  },
});
