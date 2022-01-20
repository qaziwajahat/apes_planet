import React from "react";
import "./FAQ.css";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionData";
import { FaTwitter, FaInstagram, FaMask } from "react-icons/fa";


const Roadmap = () => {
  const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem", paddingBottom:"2rem" };

  return (
    <>
        <div className="container-fluid" id="FAQ">
          <div className="row bg-black pt-5">
            <div className="col-md-10 mx-auto">
            <h1 className=" head text-white pt-5 pb-5">FREQUENTLY ASKED QUESTIONS</h1>
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
              <p className="small-para">*88 UniPreds will be reserved from the collection for giveaways and our team. Leaving (8800) UniPreds for pre and public sale.</p>
            </div>
          </div>
        </div>
      
      
     

      <div className="dataFooter bg-black">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              <p className="text-white">Copyright © 2021 Diamond Hand Apes | Designed by <a href="https://fiverr.com/usama334">Usama</a></p>
            </div>
            <div className="col-6 mx-auto text-right">
              <a href="https://discord.gg/P4N5DVuQaK">
                <FaMask style={fontStyles} />
              </a>
              <a href="https://twitter.com/NftsReal">
                <FaTwitter style={fontStyles} />
              </a>
              <a href="https://instagram.com/nfts_real_estate?utm_medium=copy_link">

                <FaInstagram style={fontStyles} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roadmap;
