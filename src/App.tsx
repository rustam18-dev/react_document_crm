import { Main } from "./components/main.tsx"
import "./App.scss"
import { useEffect } from "react"

export const App = () => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const hideDivsWithLongBackgroundUrls = () => {
  //       const allDivElements = document.querySelectorAll("div")
  //
  //       allDivElements.forEach((divElement) => {
  //         const htmlElement = divElement as HTMLElement
  //
  //         const style = window.getComputedStyle(htmlElement)
  //
  //         const background = style.getPropertyValue("background")
  //         const backgroundImage = style.getPropertyValue("background-image")
  //         console.log(background)
  //         const checkAndHide = (value: string) => {
  //           if (value.includes("url(")) {
  //             const url = value.match(/url\(["']?(.*?)["']?\)/)?.[1]
  //             if (url && url.length > 80) {
  //               htmlElement.style.display = "none"
  //             }
  //           }
  //         }
  //
  //         checkAndHide(backgroundImage)
  //         checkAndHide(background)
  //       })
  //     }
  //
  //     hideDivsWithLongBackgroundUrls()
  //   }, 10)
  //
  //   return () => clearInterval(interval)
  // }, [])
  return (
    <div className="document">
      <Main />
    </div>
  )
}
