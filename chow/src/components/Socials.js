import React from "react";
import { 
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const Socials = (props) => {
    return (
        <FacebookShareButton
          url="/"
          quote={props.myRecipe.label}
          hashtag="#food"
          className={classes.socials}
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
    );
}

export default Socials;
