
"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Home() {
  const t = useTranslations("Index");
  const [value, setValue] = useState<string>();
  return (
    <>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={(phone) => {
          setValue(phone);
        }}
        inputStyle={{
          height: "2.6rem",
          color: "#f00",
        }}
        disabled={false}
        placeholder="123456"
      />
      <h1>{t("title")}</h1>
    </>
  );
}
