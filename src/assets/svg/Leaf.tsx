const Leaf: React.FC<{ isClick: boolean }> = (p) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.22402 2.21444C3.6608 0.815011 5.81679 0.310808 8.05585 0.561755C10.2924 0.812424 12.5324 1.81084 14.0671 3.30571C14.8009 4.02043 15.3971 5.10867 15.8536 6.39903C16.3077 7.68265 16.6103 9.12873 16.7793 10.5211C16.9483 11.9136 16.9817 13.236 16.9052 14.2685C16.8669 14.7857 16.8019 15.2177 16.7178 15.544C16.6277 15.8936 16.5349 16.0427 16.4965 16.0801C16.4581 16.1175 16.3014 16.2087 15.9363 16.295C15.5962 16.3753 15.1469 16.4357 14.6103 16.4694C13.539 16.5367 12.1689 16.495 10.73 16.324C9.29135 16.153 7.80005 15.8546 6.4833 15.4155C5.15791 14.9736 4.05239 14.4033 3.34436 13.7137C1.86221 12.27 0.839012 10.0928 0.57012 7.9067C0.301071 5.71933 0.793819 3.60763 2.22402 2.21444ZM2.22402 2.21444L1.87564 1.85677L2.22402 2.21444Z"
        fill={p.isClick ? "#57CC4D" : "#ffffff"}
        stroke={p.isClick ? "#76B157" : "#57CC4D"}
      />
      <path
        d="M7 6L15.75 15.7221L16 16"
        stroke={p.isClick ? "#76B157" : "#57CC4D"}
        strokeLinecap="round"
      />
      <path
        d="M11 10L16 8"
        stroke={p.isClick ? "#76B157" : "#57CC4D"}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Leaf;
