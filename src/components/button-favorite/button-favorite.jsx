import React from "react";
import {withSetFavoriteButton} from "../../hocs/with-set-favorite-button";
import Button from "../button/button";

const ButtonFavorite = (props) => {

  return <Button disabled={false} {...props}/>;
};

export {ButtonFavorite};
export default withSetFavoriteButton(ButtonFavorite);
