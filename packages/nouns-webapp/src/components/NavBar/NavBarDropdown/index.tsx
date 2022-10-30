import clsx from 'clsx';
import classes from './NavBarDropdown.module.css';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import { ExternalURL, externalURL } from '../../../utils/externalURL';






export enum NavBarButtonStyle {
  COOL_INFO,
  COOL_WALLET,
  WARM_INFO,
  WARM_WALLET,
  WHITE_INFO,
  WHITE_ACTIVE,
  WHITE_ACTIVE_VOTE_SUBMIT,
  WHITE_WALLET,
  DELEGATE_BACK,
  DELEGATE_PRIMARY,
  DELEGATE_SECONDARY,
  DELEGATE_DISABLED,
}

interface NavBarButtonProps {
  buttonText: React.ReactNode;
  buttonIcon?: React.ReactNode;
  buttonStyle?: NavBarButtonStyle;
  onClick?: (e?: any) => void;
  disabled?: boolean;
}

export const getNavBarButtonVariant = (buttonStyle?: NavBarButtonStyle) => {
  switch (buttonStyle) {
    case NavBarButtonStyle.COOL_INFO: {
      return classes.coolInfo;
    }
    case NavBarButtonStyle.COOL_WALLET: {
      return classes.coolWallet;
    }
    case NavBarButtonStyle.WARM_INFO: {
      return classes.warmInfo;
    }
    case NavBarButtonStyle.WARM_WALLET: {
      return classes.warmWallet;
    }
    case NavBarButtonStyle.WHITE_INFO: {
      return classes.whiteInfo;
    }
    case NavBarButtonStyle.WHITE_ACTIVE: {
      return classes.whiteActive;
    }
    case NavBarButtonStyle.WHITE_ACTIVE_VOTE_SUBMIT: {
      return classes.whiteActiveVoteSubmit;
    }
    case NavBarButtonStyle.WHITE_WALLET: {
      return classes.whiteWallet;
    }
    case NavBarButtonStyle.DELEGATE_BACK: {
      return classes.delegateBack;
    }
    case NavBarButtonStyle.DELEGATE_PRIMARY: {
      return classes.delegatePrimary;
    }
    case NavBarButtonStyle.DELEGATE_SECONDARY: {
      return classes.delegateSecondary;
    }
    case NavBarButtonStyle.DELEGATE_DISABLED: {
      return classes.delegateDisabled;
    }
    default: {
      return classes.info;
    }
  }
};



const NavBarDropdown: React.FC<NavBarButtonProps> = props => {
  const { buttonText, buttonIcon, buttonStyle, onClick, disabled } = props;
  const [ open, setOpen ] = useState<boolean>(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleDropDownFocus = (state:boolean) => {
    setOpen(!state);
  };
  let isDisabled = disabled ?? false;
  const closeNav = () => setIsNavExpanded(false);
  
  return (
    <>
      <div 
        className={`${classes.wrapper} ${getNavBarButtonVariant(buttonStyle)}`}
        onClick={(e)=> handleDropDownFocus(open)}
      > 
        <div
          className={clsx(classes.button, isDisabled ? classes.btnDisabled : classes.btnEnabled)}
        >
          {buttonIcon && <div className={classes.icon}>{buttonIcon}</div>}
          <div>{buttonText}</div>
        </div>
        {open && (
          <div
            className={`${classes.dropdownMenu}`}
          >

            <br/>

            <Nav.Link
              href={externalURL(ExternalURL.discord)}
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Discord
            </Nav.Link>

            <Nav.Link
              href={externalURL(ExternalURL.twitter)}
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Twitter
            </Nav.Link>

            <Nav.Link
              href='https://prop.house/foodnouns'
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Prop House
            </Nav.Link>

            <Nav.Link
              href='https://twitter.com/prepkitchenfund'
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Prep Kitchen
            </Nav.Link>

            <Nav.Link
              href='https://twitter.com/KitchenNouncil'
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Kitchen Nouncil
            </Nav.Link>

            <Nav.Link
              href='foodnounish.wtf'
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Foodnounish
            </Nav.Link>

            <Nav.Link
              href='https://fillthevoid.xyz'
              className={`${classes.button} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              Fillthevoid
            </Nav.Link>

            <Nav.Link
              href='https://nouns.wtf/'
              className={`${classes.button} ${classes.whiteInfo} ${getNavBarButtonVariant(buttonStyle)}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
            >
              NounsDAO
            </Nav.Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBarDropdown;
