import { MenuItem } from "@material-ui/core";
import { MenuItemProps } from "@material-ui/core/MenuItem";
import { LocationDescriptor } from "history";
import * as React from "react";
import { Link } from "react-router-dom";

interface IProps extends MenuItemProps {
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

export class MenuItemLink extends React.PureComponent<IProps> {
  public render() {
    return <MenuItem {...this.props} component={createLink} />;
  }
}
