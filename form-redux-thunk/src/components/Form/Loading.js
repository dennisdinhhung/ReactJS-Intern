import { Dot, LoadingWrapper } from "../styled/Div.styled";

export default function Loading() {
  return (
    <LoadingWrapper className="loading">
      <h3>Loading</h3>

      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  );
}
