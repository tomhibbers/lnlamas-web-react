// import Button, { ButtonProps } from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// // import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';

// interface IButtonLinkProps extends ButtonProps {
//   to?: string;
// }

// const ButtonLink: React.ReactType<IButtonLinkProps> = Item;

import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { LocationDescriptor } from "history";
import * as React from "react";
import { Link } from "react-router-dom";

interface IProps extends ButtonProps {
  // ListItemProps and LinkProps both define an 'innerRef' property
  // which are incompatible. Therefore the props `to` and `replace` are
  // simply duplicated here.
  to: LocationDescriptor;
  replace?: boolean;
}

function createLink({ innerRef, ...props }: IProps) {
  // Remove `innerRef` from properties as the interface
  // is incompatible. The property `innerRef` should not be
  // needed as the `ListItem` component already provides that
  // feature with a different interface.
  return <Link {...props} />;
}

export class ButtonLink extends React.PureComponent<IProps> {
  public render() {
    return <Button {...this.props} component={createLink} />;
  }
}
