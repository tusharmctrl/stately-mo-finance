import { useMachine } from "@xstate/react";
import React, { useEffect } from "react";
import { machine } from "../machines/v5";
import { createActor } from "xstate";

const Test = () => {
  const [state, send] = useMachine(machine, {
    input: {
      encounterId: "9f052d8b-77d7-4879-bf62-1d92328f62ed",
      products: [{ name: "Data", id: "1" }],
      services: [{ name: "Data2", id: "2" }],
    },
  });
  const feedbackActor = createActor(machine, {
    input: {
      encounterId: "9f052d8b-77d7-4879-bf62-1d92328f62ed",
      products: [{ name: "Data", id: "1" }],
      services: [{ name: "Data2", id: "2" }],
    },
  })
    .start()
    .getSnapshot().context;

  return (
    <div>
      {JSON.stringify(state.value)}

      <button
        onClick={() => {
          send({ type: "SubmitInvoiceButtonClicked" });
        }}
      >
        Submit Invoice
      </button>

      <hr />

      <button
        onClick={() => {
          send({ type: "HandleLineItemsSelected" });
          send({ type: "AddNewLineItem" });
          send({ type: "ManageProductSelected" });
        }}
      >
        Enter New Line Item
      </button>
    </div>
  );
};

export default Test;
