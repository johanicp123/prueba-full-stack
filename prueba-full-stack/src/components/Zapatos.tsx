import React, { useEffect, useState } from "react"

function useZapatos() {

	const [zapatos, setZapatos] = useState([])

	useEffect(() => {
		fetch("./zapato.json")
		.then(response => response.json())
		.then(datos => {
			setZapatos(datos)
		})
	}, [])

	return zapatos
}

export default useZapatos;