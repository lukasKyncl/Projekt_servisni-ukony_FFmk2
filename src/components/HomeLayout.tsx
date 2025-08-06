
import React from "react";

import Heading from "./Heading";
import MainParagraph from "./MainParagraph";
import MainPicture from "./MainPicture";

const HomeLayout: React.FC = () => {
    return (
        <div>
            <Heading />
            <MainParagraph />
            <MainPicture />
        </div>
    );
};

export default HomeLayout;