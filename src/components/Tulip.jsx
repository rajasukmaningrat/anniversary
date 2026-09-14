function Tulip({ variant = 'md', flip = false, tilt, className = '' }) {
  const classes = [
    'tulip',
    `tulip--${variant}`,
    flip ? 'tulip--flip' : '',
    tilt ? `tulip--tilt-${tilt}` : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <span className={classes} aria-hidden="true">
      <span className="tulip__head">
        <span className="tulip__petal tulip__petal--left" />
        <span className="tulip__petal tulip__petal--center" />
        <span className="tulip__petal tulip__petal--right" />
      </span>
      <span className="tulip__stem" />
      <span className="tulip__leaf tulip__leaf--l" />
      <span className="tulip__leaf tulip__leaf--r" />
    </span>
  )
}

export default Tulip
