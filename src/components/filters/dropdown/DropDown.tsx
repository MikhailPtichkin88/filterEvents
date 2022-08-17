import {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useState, MouseEvent} from "react";
import styles from './DropDown.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    title: string
    options?: any[]
    onChangeOption?: (option: any) => void
    selectClass?: string
    optionsClass?: string
    optionsClassesArray?: string[]
}

const DropDown: React.FC<SuperSelectPropsType> = (
    {
        title,
        optionsClass,
        optionsClassesArray,
        selectClass,
        value,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const [menuList, setMenuList] = useState(false)

    const dropDownIconClass = menuList ? `${styles.menuIcon} ${styles.iconActive}` : `${styles.menuIcon}`

    const dropDownMenuClass = menuList ? `${styles.menu} ${styles.menuActive}` : `${styles.menu}`


    const mappedOptions: any[] = options ? options.map((opt, i) => {

        return (<option key={"option" + '-' + i}
                        value={opt}

            >{opt}</option>
        )
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }
    const openMenuHandler = () => {
        setMenuList(!menuList)
    }

    const onMouseLeaveHandler = () =>{
        setTimeout(()=>{
            setMenuList(false)
        }, 500)
    }

    const chooseSelect = (event: MouseEvent<HTMLLIElement>) => {
        setMenuList(!menuList)
        onChangeOption && onChangeOption(event.currentTarget.getAttribute('value'))
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{title}</span>
            <select onChange={onChangeCallback} value={value} className={styles.select}  {...restProps}>
                {mappedOptions}
            </select>

            <ul className={styles.dropdown} >

                <li className={dropDownIconClass + ` ${selectClass}`}>
                    <button className={styles.openMenuBtn}
                            type="button"
                            onClick={openMenuHandler}>
                        {value}
                    </button>

                    <ul className={dropDownMenuClass} >

                        {
                            options && options?.map((el, i) => {

                                let optionClasses = optionsClassesArray && optionsClassesArray.find(className => className.includes(el))

                                return <li key={"option" + "-" + el}
                                           className={styles.menuItem + ` ${optionsClass} ${optionClasses}`}
                                           onClick={chooseSelect}
                                           value={el}>
                                    {el}
                                </li>
                            })
                        }

                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default DropDown