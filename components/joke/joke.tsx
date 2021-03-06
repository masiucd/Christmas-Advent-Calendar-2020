import * as React from "react"
import styled from "styled-components"
import Image from "next/image"
import { Joke as JokeType } from "@utils/types"
import { QueryObserverResult, RefetchOptions } from "react-query"

interface RefreshButtonProps {
  hasRefreshed?: boolean
}
const RefreshButton = styled.button<RefreshButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 30rem;
  outline: none;
  padding: 1rem;
  position: relative;
  width: 100%;
  h3 {
    color: var(--textColor);
    font-size: 2rem;
    text-shadow: 2px 2px var(--background);
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    line-height: 2.5rem;
    padding: 1rem;
  }

  #candy-img {
    transform: ${({ hasRefreshed }) =>
      hasRefreshed ? `rotate(45deg) scale(1.125) ` : `rotate(0deg)`};

    transition: var(--main-trans);
  }
`
interface JokeProps {
  joke: Partial<JokeType> | undefined
  refetchJoke: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<JokeType, unknown>>
}

export const Joke: React.FC<JokeProps> = ({ joke, refetchJoke }) => {
  const [jokeText, setJokeText] = React.useState("")
  const [hasRefreshed, setHasRefreshed] = React.useState(false)

  return (
    <>
      <RefreshButton
        hasRefreshed={hasRefreshed}
        data-testid="refresh-button"
        onClick={() => {
          setJokeText(joke?.joke || "")
          refetchJoke()
          setHasRefreshed(true)
          setTimeout(() => {
            setHasRefreshed(false)
          }, 400)
        }}
      >
        {jokeText && <h3 data-testid="joke-text">{jokeText}</h3>}
        <Image
          aria-label="candy-image"
          id="candy-img"
          src="/candy.svg"
          alt="candy"
          width={500}
          height={500}
        />
      </RefreshButton>
    </>
  )
}
