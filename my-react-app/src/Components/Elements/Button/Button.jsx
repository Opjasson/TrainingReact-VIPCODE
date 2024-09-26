function Button(props) {
    const { children, variant="bg-slate-400", onClick = () => {}, type="button" } = props
    return (
      <div>
        <div>
          <button className={`px-5 ${variant}  rounded`}
          type={type}
          onClick={onClick}>
              {children}
          </button>
        </div>
      </div>
    )
}

export default Button