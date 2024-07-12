import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

const StyledFormWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  height: 300px;
`;

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  const { data: inputInfo, isLoading } = useSWR("/api/index.js");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setShowCoverLetter(true);
  }

  function handleClick() {
    setShowCoverLetter(false);
  }

  if (showCoverLetter) {
    return (
      <>
        <h1>Access your personal cover letter below</h1>
        <article>AI is generating your cover letter ...</article>
        <button onClick={handleClick}>Go back</button>
      </>
    );
  }

  return (
    <div>
      <h1>Cover Letter Generator</h1>
      <form onSubmit={handleSubmit}>
        <StyledFormWrapper>
          <section>
            <label htmlFor="yourself">Enter a few words about yourself:</label>
            <textarea
              id="yourself"
              name="yourself"
              rows="10"
              cols="10"
              placeholder="I am ..."
            />
          </section>

          <section>
            <label htmlFor="job-decription">Enter the job description:</label>
            <textarea
              id="job-decription"
              name="job-decription"
              rows="10"
              cols="50"
              placeholder="Important skills are ..."
            />
          </section>
        </StyledFormWrapper>
        <section>
          <button type="submit">Generate</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </div>
  );
}
