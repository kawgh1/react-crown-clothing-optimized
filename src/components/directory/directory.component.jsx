import React from "react";

import MenuItem from "../menu-item/menu-item.component";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        <hr style={{ color: "white", width: "90%" }} />
        {sections.map((section) => (
            <MenuItem
                key={section.id}
                imageUrl={section.imageUrl}
                title={section.title}
                size={section.size}
                linkUrl={section.linkUrl}
                {...console.log(section.linkUrl)}
            />
        ))}

        <hr style={{ color: "white", width: "90%" }} />
    </DirectoryMenuContainer>
);

// redux
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

// export default Directory;
export default connect(mapStateToProps)(Directory);
