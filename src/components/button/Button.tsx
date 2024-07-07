import styles from "./Button.module.scss";
import clsx from "clsx";
import { IButtonProps } from "./Button.props";

const Button = ({ children, className, ...props }: IButtonProps) => {
    return (
        <button className={clsx(className, styles.button)} {...props}>{children}</button>
    )
}



export default Button;