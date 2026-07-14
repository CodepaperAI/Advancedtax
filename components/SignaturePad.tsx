"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export interface SignaturePadHandle {
  isEmpty: () => boolean;
  clear: () => void;
  toDataURL: () => string;
}

interface SignaturePadProps {}

export const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(
  function SignaturePad(_props, ref) {
    const signatureRef = useRef<SignatureCanvas>(null);

    useImperativeHandle(
      ref,
      () => ({
        isEmpty: () => signatureRef.current?.isEmpty() ?? true,
        clear: () => signatureRef.current?.clear(),
        toDataURL: () => signatureRef.current?.toDataURL() ?? "",
      }),
      []
    );

    return (
      <div>
        <SignatureCanvas
          ref={signatureRef}
          penColor="black"
          canvasProps={{
            className: "signature-canvas",
            width: 700,
            height: 200,
          }}
        />

        <button type="button" onClick={() => signatureRef.current?.clear()}>
          Clear Signature
        </button>
      </div>
    );
  }
);

SignaturePad.displayName = "SignaturePad";