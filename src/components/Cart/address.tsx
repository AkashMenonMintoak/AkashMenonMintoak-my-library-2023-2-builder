import React, { Fragment, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
// import { pushDeliveryAddress, cart } from "../../slice/cartSlice";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   useAddressCustomer,
//   useNewAddress,
// } from "../helpers/APIHooks/APIHooks";
// import { errorMessageHandler } from "../customToastContainer/errorMessageHandler";

// interface IAddress {
//   id: string;
//   address1: string;
//   address2: string;
//   address3: string;
//   addressType: string;
//   pincode: number;
// }

export default function Address({ setuserDetails, cartAddress, dataAddress, isLoading }: any) {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
    reset,
  } = useForm();

  // const cartAddress = useSelector(cart);
  // const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  let [isSelectAddressOpen, setIsSelectAddressOpen] = useState(false);
  // =================================================================>
  // Address API Integration
  // const { data: dataAddress, error, isLoading } = useAddressCustomer();
  // New Address API Integration
  // const { trigger, error: customerMobileError } = useNewAddress();

  // if (error) {
  //   errorMessageHandler(
  //     "address",
  //     error?.code,
  //     error?.message,
  //     error?.response?.status
  //   );
  // }

  function closeModal() {
    setIsOpen(false);
    reset();
  }

  function openModal() {
    setIsOpen(true);
  }

  function openAddressModal() {
    setIsSelectAddressOpen(true);
  }

  function closeChangeAddressModal() {
    setIsSelectAddressOpen(false);
    false;
  }

  const onSubmitChange = () => {
    openAddressModal();
  };

  useEffect(() => {
    if (!cartAddress?.address) {
      setIsSelectAddressOpen(true);
    }
  }, [cartAddress?.address]);

  const onSubmit = (data: any) => {
    let newData = data;
    newData["mobileNumber"] = dataAddress?.mobileNumber;

    // trigger(data);

    closeModal();
  };

  useEffect(() => {
    if (dataAddress?.id) {
      setuserDetails(dataAddress);
    }
  }, [dataAddress?.id]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-5 space-y-10 bg-white shadow-sm rounded-2xl">
      <div className="relative flex items-center justify-between space-x-4">
        <div className="flex flex-row">
          <div className="p-3 text-green-400 rounded-xl bg-green-50">
            <Icon
              icon="material-symbols:location-on-outline-rounded"
              className="w-6 h-6"
            />
          </div>

          <div className="text-start">
            <p>Delivery address</p>
            <p className="text-xs text-black/50">
              You order will be shipped to:{" "}
            </p>
          </div>
        </div>

        <button
          onClick={openModal}
          className="rounded-lg p-1.5  px-4 bg-gray-200 hover:bg-gray-300"
        >
          Add New
        </button>
      </div>

      {/* Selected Address */}
      {!isLoading && cartAddress?.address ? (
        <div className="flex items-center justify-between w-full space-y-2 rounded-lg">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 lowercase">
              <Icon
                icon="material-symbols:location-on-outline-rounded"
                className="w-5 h-5"
              />
              <div>{cartAddress?.address.addressType}</div>
            </div>

            <p className="mx-1 text-sm">
              {cartAddress?.address.address1}, {cartAddress?.address.address2},{" "}
              {cartAddress?.address.address3}, {cartAddress?.address.pincode}
            </p>
          </div>

          <button
            onClick={() => onSubmitChange()}
            className="rounded-lg p-1.5 px-4 bg-black text-white shadow-inner pl-5 pr-5"
          >
            Change
          </button>
        </div>
      ) : null}

      {/* Store Delivery Note */}
      <div className="flex items-center p-4 space-x-4 text-sm rounded-xl bg-red-50">
        <Icon icon="mdi:truck-fast-outline" className="h-7 w-7" />
        <div>
          <p>
            <b>The order delivery is managed by Store.</b>
          </p>
          <p className="text-xs">
            Tracking information will be available once the order is dispatched
          </p>
        </div>
      </div>

      {/* Model For Select Address */}
      <Transition appear show={isSelectAddressOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openAddressModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="relative w-full max-w-md p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  {/* Modal Title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Select Address
                  </Dialog.Title>

                  {/* Modal Description */}
                  <div className="mt-2">
                    {/* Total No Of Address */}
                    <div className="grid w-full grid-cols-2 gap-5 justify-items-center">
                      {dataAddress?.id ? (
                        <React.Fragment>
                          {dataAddress?.attributes?.addressList?.map(
                            (add: any) => (
                              <div
                                className="flex flex-col justify-between space-y-2 border rounded-lg"
                                key={add.id}
                              >
                                <div className="flex items-center p-2 space-x-2 lowercase">
                                  <Icon icon="akar-icons:home-alt1" />
                                  <div>{add.addressType}</div>
                                </div>

                                <p className="mx-2 text-sm">
                                  {add.address1}, {add.address2}, {add.address3}
                                  , {add.pincode}
                                </p>

                                <button
                                  // onClick={() =>
                                  //   dispatch(
                                  //     pushDeliveryAddress({
                                  //       id: add.id,
                                  //       address1: add.address1,
                                  //       address2: add.address2,
                                  //       address3: add.address3,
                                  //       addressType: add.addressType,
                                  //       pincode: add.pincode,
                                  //     })
                                  //   ) && setIsSelectAddressOpen(false)
                                  // }
                                  className="rounded-lg p-1.5  px-4 bg-black text-white shadow-inner"
                                >
                                  Deliver here
                                </button>
                              </div>
                            )
                          )}
                        </React.Fragment>
                      ) : null}

                      {/* Add new address */}
                      <div className="w-full p-3 space-y-3 border border-dashed rounded-lg text-start">
                        <div className="flex items-center space-x-2">
                          <Icon
                            icon="material-symbols:location-on-outline-rounded"
                            className="w-6 h-6"
                          />
                          <div>Add new address</div>
                        </div>

                        <button
                          onClick={openModal}
                          className="rounded-lg p-1.5  px-4 bg-gray-200 hover:bg-gray-300"
                        >
                          Add New
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Close change address modal */}
                  <button
                    className="absolute top-1 right-1 text-rose-500"
                    onClick={closeChangeAddressModal}
                  >
                    <Icon icon="ep:circle-close-filled" className="w-6 h-6 " />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Model For Choose/Add/Remove Address */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="relative w-full max-w-md p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  {/* Modal Title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Address
                  </Dialog.Title>

                  {/* Modal Description */}
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="grid grid-cols-2 gap-3 py-2 text-sm gap-y-4"
                    >
                      <input
                        placeholder="Full Name"
                        className="form-input-address"
                        {...register("name", { required: true })}
                      />

                      <input
                        placeholder="House no, locality"
                        className="form-input-address"
                        {...register("address1", { required: true })}
                      />

                      <input
                        placeholder="Area address"
                        className="form-input-address"
                        {...register("address2", { required: true })}
                      />

                      <input
                        type={"tel"}
                        maxLength={6}
                        placeholder="Pincode"
                        className="form-input-address"
                        {...register("pincode", { required: true })}
                      />

                      <input
                        placeholder="District"
                        className="form-input-address"
                        {...register("district", { required: true })}
                      />

                      <input
                        placeholder="State"
                        className="form-input-address"
                        {...register("state", { required: true })}
                      />

                      <select
                        {...register("addressType", { required: true })}
                        className="px-4 py-2 rounded-full form-select"
                      >
                        <option value="">Address Type...</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                      </select>

                      <input
                        type="submit"
                        value={"Save address"}
                        className="px-4 py-2 text-base text-white bg-black rounded-md cursor-pointer hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                      />
                    </form>
                  </div>

                  {/* Close address modal */}
                  <button
                    className="absolute top-1 right-1 text-rose-500"
                    onClick={closeModal}
                  >
                    <Icon icon="ep:circle-close-filled" className="w-6 h-6 " />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
