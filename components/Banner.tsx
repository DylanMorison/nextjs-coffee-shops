import styles from "./banner.module.css"

export const Banner = ({
	buttonText,
	handleOnClick
}: {
	buttonText: string
	handleOnClick: () => void
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Coffee</span>{" "}
				<span className={styles.title2}>Connoisseur</span>
			</h1>
			<p className={styles.subTitle}>Discover your local cofee shops!</p>
			<button className={styles.button} onClick={handleOnClick}>
				{buttonText}
			</button>
		</div>
	)
}
