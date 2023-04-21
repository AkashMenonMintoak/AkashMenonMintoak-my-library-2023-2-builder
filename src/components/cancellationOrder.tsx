import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
// import { useNotification } from "./helpers/APIHooks/APIHooks";
// import { errorMessageHandler } from "./customToastContainer/errorMessageHandler";

export default function CancellationOrder({
  selectedOrder,
  setSelectedOrder,
}: any) {
  // const { trigger, data, error } = useNotification();

  // if (error) {
  //   errorMessageHandler(
  //     "order",
  //     error?.code,
  //     error?.message,
  //     error?.response?.status
  //   );
  // }

  const cancelOrderReason = [
    { label: "Order by Mistake", value: "Order by Mistake" },
    {
      label: "Found better price on different website",
      value: "Found better price on different website",
    },
    { label: "Prices are High", value: "Prices are High" },
    { label: "Other", value: "Other" },
  ];

  const form = useForm({
    defaultValues: {
      reasonForCancellation: cancelOrderReason[0]?.value,
    },
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const closeCancelOrderModal = () => {
    setSelectedOrder({});
  };

  const onSubmit = () => {
    // trigger({
    //   detail: selectedOrder?.detail,
    // });
    closeCancelOrderModal();
  };

  return (
    <React.Fragment>
      {/* Modal Cancellation order */}
      <Transition
        appear
        show={selectedOrder?.orderId ? true : false}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeCancelOrderModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-[0.07]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md p-3 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl lg:p-5 rounded-2xl">
                  {/* Modal Title */}
                  <Dialog.Title
                    as="h3"
                    className="py-1 font-medium leading-6 text-gray-900 border-b text-md lg:text-lg"
                  >
                    Reason for cancellation order
                  </Dialog.Title>

                  {/* Modal Description */}
                  <div className="mt-2">
                    {/* Option for cancellation order*/}
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full p-2 text-sm rounded-lg lg:text-lg text-start"
                    >
                      <div className="lg:py-5">
                        {cancelOrderReason?.map((reason) => (
                          <div className="flex items-center gap-2 py-1">
                            <input
                              type="radio"
                              value={reason?.value}
                              {...register("reasonForCancellation")}
                            />

                            <label>{reason?.label}</label>
                          </div>
                        ))}
                        <div className="text-center">
                          <div>
                            {errors.reasonForCancellation && (
                              <p className="text-rose-500">
                                *Please select one option*
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <button
                            type="submit"
                            className="cancellation_Order_btn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <button
                    className="absolute top-1 right-1 hover:text-rose-500"
                    onClick={closeCancelOrderModal}
                  >
                    <Icon icon="ep:circle-close-filled" className="w-6 h-6 " />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* Close Modal*/}
    </React.Fragment>
  );
}
