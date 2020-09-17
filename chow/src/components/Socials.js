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
      <div>
        <FacebookShareButton
          url="/"
          quote={props.myRecipe.label}
          hashtag="#food"
          className="socials"
        >
          <FacebookIcon 
            size={36}
            round={true}
            />
        </FacebookShareButton>
        <TwitterShareButton
          title={props.myRecipe.label}
          via="/"
          hashtags="#food, #chow"
        >
            <TwitterIcon 
              size={36}
              round={true}
            />
        </TwitterShareButton>
        <PinterestShareButton
          media={props.myRecipe.image}
          description={props.myRecipe.label}
        >
            <PinterestIcon
              size={36}
              round={true}
            />
        </PinterestShareButton>
      </div>
    );
};

export default Socials;
