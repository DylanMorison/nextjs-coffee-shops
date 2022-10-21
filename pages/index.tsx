import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Banner } from "../components/Banner"
import { Card } from "../components/card"
import styles from "../styles/Home.module.css"
import coffeeStores from "../data/coffee-stores.json"

const Home: NextPage = () => {
	const handleOnBannerBtnClick = () => {
		console.log("hi banner btn")
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseur</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Banner
					buttonText="View stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
				<Image
					className={styles.heroImage}
					src="/static/hero-image.png"
					width={700}
					height={400}
					alt="hero image"
				/>
				<div className={styles.cardLayout}>
					{coffeeStores.map(({ id, name, imgUrl }) => (
						<Card
							key={id}
							name={name}
							imgUrl={imgUrl}
							href={`/coffee-store/${id}`}
						/>
					))}
				</div>
			</main>
		</div>
	)
}

export default Home
