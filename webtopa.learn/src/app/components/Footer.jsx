import React from "react";
import Button from "./Button";
import Logo from "./Logo";
export default function Footer() {
  return (
    <div
      className="w-screen h-80 bg-[#1a1a1a] text-white flex justify-around items-center border-b-[1px] border-[#444444]

"
    >
      <div>
        <svg
          width="96"
          height="40"
          viewBox="0 0 661 331"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M116 124L180.5 239"
            stroke="#8857F6"
            stroke-width="36"
            stroke-linecap="round"
          />
          <path
            d="M226 119L181 239"
            stroke="#8857F6"
            stroke-width="36"
            stroke-linecap="round"
          />
          <path
            d="M18 128L82.5 241"
            stroke="#8857F6"
            stroke-width="36"
            stroke-linecap="round"
          />
          <path
            d="M253.94 270C236.487 270 223.7 265.94 215.58 257.82C207.46 249.7 203.4 236.913 203.4 219.46V187.82C203.4 170.367 207.413 157.627 215.44 149.6C223.56 141.48 236.393 137.513 253.94 137.7H276.9C290.62 137.7 301.073 140.033 308.26 144.7C315.54 149.273 319.88 156.507 321.28 166.4C321.56 168.92 321 170.833 319.6 172.14C318.293 173.447 316.427 174.1 314 174.1C311.76 174.1 310.08 173.54 308.96 172.42C307.84 171.207 307 169.48 306.44 167.24C305.413 161.827 302.66 158 298.18 155.76C293.7 153.52 286.607 152.4 276.9 152.4H253.94C240.593 152.213 231.26 154.733 225.94 159.96C220.713 165.093 218.1 174.38 218.1 187.82V219.46C218.1 232.807 220.713 242.14 225.94 247.46C231.26 252.687 240.593 255.3 253.94 255.3H276.9C286.607 255.3 293.7 254.18 298.18 251.94C302.66 249.7 305.413 245.827 306.44 240.32C307 238.08 307.84 236.4 308.96 235.28C310.08 234.067 311.76 233.46 314 233.46C316.427 233.46 318.293 234.16 319.6 235.56C321 236.867 321.56 238.733 321.28 241.16C319.88 251.053 315.54 258.333 308.26 263C301.073 267.667 290.62 270 276.9 270H253.94Z"
            fill="#202020"
          />
          <path
            d="M256.915 259C242.578 259 232.075 255.665 225.405 248.995C218.735 242.325 215.4 231.822 215.4 217.485V191.495C215.4 177.158 218.697 166.693 225.29 160.1C231.96 153.43 242.502 150.172 256.915 150.325H275.775C287.045 150.325 295.632 152.242 301.535 156.075C307.515 159.832 311.08 165.773 312.23 173.9C312.46 175.97 312 177.542 310.85 178.615C309.777 179.688 308.243 180.225 306.25 180.225C304.41 180.225 303.03 179.765 302.11 178.845C301.19 177.848 300.5 176.43 300.04 174.59C299.197 170.143 296.935 167 293.255 165.16C289.575 163.32 283.748 162.4 275.775 162.4H256.915C245.952 162.247 238.285 164.317 233.915 168.61C229.622 172.827 227.475 180.455 227.475 191.495V217.485C227.475 228.448 229.622 236.115 233.915 240.485C238.285 244.778 245.952 246.925 256.915 246.925H275.775C283.748 246.925 289.575 246.005 293.255 244.165C296.935 242.325 299.197 239.143 300.04 234.62C300.5 232.78 301.19 231.4 302.11 230.48C303.03 229.483 304.41 228.985 306.25 228.985C308.243 228.985 309.777 229.56 310.85 230.71C312 231.783 312.46 233.317 312.23 235.31C311.08 243.437 307.515 249.417 301.535 253.25C295.632 257.083 287.045 259 275.775 259H256.915Z"
            fill="white"
          />
          <path
            d="M356.4 238C346.45 238 339.05 235.6 334.2 230.8C329.4 226 327 218.65 327 208.75V191.35C327 181.3 329.4 173.9 334.2 169.15C339.05 164.35 346.45 161.95 356.4 161.95H368.7C378.7 161.95 386.1 164.35 390.9 169.15C395.7 173.95 398.1 181.35 398.1 191.35V208.6C398.1 218.55 395.7 225.95 390.9 230.8C386.1 235.6 378.7 238 368.7 238H356.4ZM339.6 208.75C339.6 215.2 340.775 219.6 343.125 221.95C345.475 224.25 349.9 225.4 356.4 225.4H368.7C375.25 225.4 379.675 224.225 381.975 221.875C384.325 219.525 385.5 215.1 385.5 208.6V191.35C385.5 184.8 384.325 180.375 381.975 178.075C379.675 175.725 375.25 174.55 368.7 174.55H356.4C352.05 174.55 348.65 175.05 346.2 176.05C343.8 177 342.1 178.7 341.1 181.15C340.1 183.55 339.6 186.95 339.6 191.35V208.75ZM451.468 238C441.518 238 434.118 235.6 429.268 230.8C424.468 225.95 422.068 218.55 422.068 208.6V191.35C422.068 181.35 424.468 173.95 429.268 169.15C434.118 164.35 441.518 161.95 451.468 161.95H480.568V138.7C480.568 134.5 482.668 132.4 486.868 132.4C491.068 132.4 493.168 134.5 493.168 138.7V231.7C493.168 235.9 491.068 238 486.868 238C482.668 238 480.568 235.9 480.568 231.7V230.65C478.218 233.05 475.143 234.875 471.343 236.125C467.543 237.375 462.818 238 457.168 238H451.468ZM451.468 225.4H457.168C463.768 225.4 469.318 224.55 473.818 222.85C478.318 221.15 480.568 218.55 480.568 215.05V174.55H451.468C444.968 174.55 440.543 175.75 438.193 178.15C435.843 180.5 434.668 184.9 434.668 191.35V208.6C434.668 215.1 435.843 219.525 438.193 221.875C440.593 224.225 445.018 225.4 451.468 225.4ZM545.584 238C537.934 238 532.234 236.125 528.484 232.375C524.784 228.575 522.934 222.85 522.934 215.2V138.7C522.934 134.5 525.034 132.4 529.234 132.4C533.434 132.4 535.534 134.5 535.534 138.7V215.2C535.534 219.25 536.184 221.975 537.484 223.375C538.834 224.725 541.534 225.4 545.584 225.4C549.884 225.4 552.034 227.5 552.034 231.7C552.184 235.9 550.034 238 545.584 238ZM594.45 268C587.2 268 581.775 266.175 578.175 262.525C574.625 258.925 572.85 253.5 572.85 246.25C572.85 242.05 574.95 239.95 579.15 239.95C583.35 239.95 585.45 242.05 585.45 246.25C585.45 250 586 252.45 587.1 253.6C588.25 254.8 590.7 255.4 594.45 255.4H623.55C627.25 255.4 629.675 254.8 630.825 253.6C631.975 252.45 632.55 250 632.55 246.25V227.2C629.55 231.7 626.05 234.625 622.05 235.975C618.1 237.325 613.8 238 609.15 238H601.8C591.9 238 584.6 235.65 579.9 230.95C575.2 226.25 572.85 219 572.85 209.2V168.25C572.85 164.05 574.95 161.95 579.15 161.95C583.35 161.95 585.45 164.05 585.45 168.25V209.2C585.45 215.5 586.575 219.775 588.825 222.025C591.125 224.275 595.45 225.4 601.8 225.4H609.15C617.35 225.4 623.3 224.075 627 221.425C630.7 218.725 632.55 214.65 632.55 209.2V168.25C632.55 164.05 634.65 161.95 638.85 161.95C643.05 161.95 645.15 164.05 645.15 168.25V246.25C645.15 253.5 643.35 258.925 639.75 262.525C636.15 266.175 630.75 268 623.55 268H594.45Z"
            fill="white"
          />
          <path
            d="M288.84 211.98C290.053 211.98 290.987 212.54 291.64 213.66C292.387 214.78 292.76 216.32 292.76 218.28C292.76 221.64 291.967 224.533 290.38 226.96C287.767 230.973 284.313 234.1 280.02 236.34C275.82 238.58 270.78 239.7 264.9 239.7C255.94 239.7 248.987 237.04 244.04 231.72C239.093 226.307 236.62 219.027 236.62 209.88C236.62 203.44 237.973 197.467 240.68 191.96C243.387 186.36 247.12 181.927 251.88 178.66C256.733 175.393 262.193 173.76 268.26 173.76C273.673 173.76 278.013 175.393 281.28 178.66C284.547 181.833 286.18 186.173 286.18 191.68C286.18 198.12 283.847 203.673 279.18 208.34C274.607 212.913 266.767 216.553 255.66 219.26C257.9 223.553 261.68 225.7 267 225.7C270.827 225.7 273.953 224.813 276.38 223.04C278.9 221.267 281.793 218.28 285.06 214.08C286.18 212.68 287.44 211.98 288.84 211.98ZM265.88 187.48C262.427 187.48 259.487 189.487 257.06 193.5C254.727 197.513 253.56 202.367 253.56 208.06V208.34C259.067 207.033 263.407 205.073 266.58 202.46C269.753 199.847 271.34 196.813 271.34 193.36C271.34 191.587 270.827 190.187 269.8 189.16C268.867 188.04 267.56 187.48 265.88 187.48Z"
            fill="#8857F6"
          />
        </svg>
      </div>
      <div className="w-1/3 h-full flex justify-between items-center text-sm">
        <p>
          <strong className="text-purple">#</strong> HTML Course
        </p>
        <p>
          <strong className="text-purple">#</strong> CSS Course
        </p>
        <p>
          <strong className="text-purple">#</strong> Wix Course
        </p>
      </div>
      <Button text="Register" />{" "}
    </div>
  );
}
