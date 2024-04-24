import React from 'react'

const Download=()=>{
  const onButtonClick = () => {
    const pdfUrl = "./assets/Resume111.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>

        <button onClick={onButtonClick}>Download PDF</button>
     
    </>
  );
}
export default Download;