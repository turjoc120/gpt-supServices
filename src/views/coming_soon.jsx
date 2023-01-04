import { Container } from "components/shared";

const ComingSoon = () => {
  return (
    <Container className="h-screen  text-center space-y-5">
      <div className="space-y-5 p-5 bg-white shadow-md rounded-lg">
        <div className="w-[60%] m-auto">
          <img
            src="/img/others/coming-soon.png"
            alt="Coming Soon"
            className="w-100 h-100 object-contain"
          />
        </div>
        <h3 className="font-bold text-2xl">Coming Soon</h3>
        <p>
          This Page is still Under Development and it will be available soon.
        </p>
      </div>
    </Container>
  );
};

export default ComingSoon;
