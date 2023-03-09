import React from "react";
import resume from "../Art_Elshani_CV.pdf";
import SEO from "../components/SEO";

export default function Resume() {
  return (
    <div className="h-screen">
      <SEO />
      <iframe
        src={`${resume}#view=fitH`}
        title="Art Elshani - CV"
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
