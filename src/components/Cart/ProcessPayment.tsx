import React from "react";
import { Icon } from "@iconify/react";
import Button from "../Button/Button";

export default function ProcessPayment({ onProceedPayment }: any) {
  return (
    <div className="mintoak-library-process-payment-main-container">
      <div className="mintoak-library-process-payment-content">
        <div className="payment-icon">
          <Icon icon="bxs:credit-card" className="w-6 h-6" />
        </div>
        <div className="make-payment">
          <p>Make payment</p>
          <p className="text-xs text-black/50">We accept all payment methods</p>
        </div>
      </div>
      <Button
        label={'Proceed for payment'}
        onClickMethod={onProceedPayment}
      />
    </div>
  );
}
