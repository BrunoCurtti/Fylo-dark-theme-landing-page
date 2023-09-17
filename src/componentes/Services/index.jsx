import { Service_features } from "./Service_features";

export const Services = () => {
  return (
    <>
      <div className="services__wrapper">
        <Service_features
          type="access-anywhere"
          heading="Access your files, anywhere"
          text="The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."
        />
        <Service_features
          type="security"
          heading="Security you can trust"
          text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
        <Service_features
          type="collaboration"
          heading="Real-time collaboration"
          text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements required."
        />
        <Service_features
          type="any-file"
          heading="Store any type of file"
          text="Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </div>
    </>
  );
};
