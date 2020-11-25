const TDropdown = {
    classes: {
        button: 'p-3',
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-right absolute right-0 w-48 rounded-md shadow-md bg-white my-1',
        enterClass: '',
        enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveActiveClass: '',
        leaveToClass: 'transform opacity-0 scale-95 duration-75',
    },
}

const settings = {
    TDropdown,
}

export default settings