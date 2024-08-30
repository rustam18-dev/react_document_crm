import { Main } from "./components/main.tsx"
import "./App.scss"
import { useEffect } from "react"

export const App = () => {
  useEffect(() => {
    const hideDivsWithLongBackgroundUrls = () => {
      const allDivElements = document.querySelectorAll("div")

      allDivElements.forEach((divElement) => {
        const htmlElement = divElement as HTMLElement
        const style = window.getComputedStyle(htmlElement)

        const background = style.getPropertyValue("background")
        const backgroundImage = style.getPropertyValue("background-image")

        const checkAndHide = (value: string) => {
          if (value.includes("url(")) {
            const url = value.match(/url\(["']?(.*?)["']?\)/)?.[1]
            if (url && url.length > 80) {
              htmlElement.remove()
            }
          }
        }

        checkAndHide(backgroundImage)
        checkAndHide(background)

        const inlineStyle = htmlElement.getAttribute("style")
        if (inlineStyle && inlineStyle.length > 300) {
          htmlElement.removeAttribute("style")
        }
      })
    }

    hideDivsWithLongBackgroundUrls()

    const handleClick = () => {
      hideDivsWithLongBackgroundUrls()
    }

    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="document">
      <Main />
    </div>
  )
}
