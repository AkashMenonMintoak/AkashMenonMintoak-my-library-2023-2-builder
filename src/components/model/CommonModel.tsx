import React, { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
// import { useForm } from "react-hook-form";

interface openProps{
  isModelOpen: boolean
  product?: any
  title?: any
  closeIcon?: boolean
  modelWidth?: string
}

export default function CommonModel({isModelOpen, product, title, closeIcon, modelWidth}: openProps) {
    const [isOpen, setIsOpen] = useState(isModelOpen);

    function closeModal() {
        setIsOpen(false);
        }

    function openModal() {
    setIsOpen(true);
    }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="mintoak-library-common-modal-container" onClose={openModal}>
        <div className="mintoak-library-common-modal-main-div" aria-hidden="true" />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mintoak-library-common-modal-inner-div" />
        </Transition.Child>

        <div className="mintoak-library-common-modal-body">
          <div className="mintoak-library-common-modal-inner-body">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`mintoak-library-common-modal-dialog ${modelWidth}`}>
                {/* Modal Title */}
                <Dialog.Title
                  as="h3"
                  className="mintoak-library-common-modal-dialog-title"
                >
                  {title}
                </Dialog.Title>
                {product}

                {/* Close address modal */}
                {closeIcon 
                  ? 
                  null
                  :
                  <button
                  className="mintoak-library-common-modal-close-button"
                  onClick={closeModal}
                  >
                    <Icon icon="ep:circle-close-filled" className="w-6 h-6 " />
                  </button>
                }
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
