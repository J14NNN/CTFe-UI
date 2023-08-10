export function getChallSvg(type) {
  return challSvgs[type];
}

var challSvgs = {
  'All': '<svg t="1690206252711" style="fill:black" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29663" width="32" height="32"><path d="M483.34848 495.77984H155.56608V168.01792H483.328v327.76192z m-276.25472-51.52768h224.70656V219.5456H207.09376v224.70656zM878.3872 495.77984H550.6048V168.01792H878.3872v327.76192zM602.112 444.25216h224.72704V219.5456H602.112v224.70656zM484.06528 886.51776H156.28288V558.75584h327.76192v327.76192z m-276.25472-51.52768H432.5376V610.28352H207.81056v224.70656zM879.104 886.51776H551.3216V558.75584h327.7824v327.76192z m-276.25472-51.52768h224.72704V610.28352H602.84928v224.70656z" p-id="29664"></path></svg>',
  'Misc': '<svg t="1690188454675" style="fill:#FF9F1C" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5019" width="100" height="100"><path d="M469.333 213.333v-42.666a42.667 42.667 0 0 1 85.334 0v42.666H768A170.667 170.667 0 0 1 938.667 384v384a85.333 85.333 0 0 1-85.334 85.333H823.34a170.667 170.667 0 0 1-97.75-30.72c-92.842-64.853-164.01-97.28-213.589-97.28-49.579 0-120.747 32.427-213.59 97.28a170.667 170.667 0 0 1-97.706 30.72h-30.037A85.333 85.333 0 0 1 85.333 768V384A170.667 170.667 0 0 1 256 213.333h213.333zM256 298.667A85.333 85.333 0 0 0 170.667 384v384h29.994a85.333 85.333 0 0 0 48.896-15.36C355.584 678.528 440.277 640 512 640c71.765 0 156.416 38.528 262.443 112.64A85.333 85.333 0 0 0 823.339 768h29.994V384A85.333 85.333 0 0 0 768 298.667H256zM384 448h42.667a42.667 42.667 0 0 1 0 85.333H384V576a42.667 42.667 0 0 1-85.333 0v-42.667H256A42.667 42.667 0 0 1 256 448h42.667v-42.667a42.667 42.667 0 1 1 85.333 0V448z m298.667-85.333a42.667 42.667 0 1 1 0 85.333 42.667 42.667 0 0 1 0-85.333zM597.333 448a42.667 42.667 0 1 1 0 85.333 42.667 42.667 0 0 1 0-85.333zM768 448a42.667 42.667 0 1 1 0 85.333A42.667 42.667 0 0 1 768 448z m-85.333 85.333a42.667 42.667 0 1 1 0 85.334 42.667 42.667 0 0 1 0-85.334z" p-id="5020"></path></svg>',
  'Web': '<svg t="1690188295944" style="fill:#2EC4B6" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3867" width="100" height="100"><path d="M955.392 514.56c0-242.688-196.608-439.296-439.296-439.296C273.408 75.264 76.8 271.872 76.8 514.56c0 242.688 196.608 439.296 439.296 439.296 116.224 0 221.696-45.056 300.032-118.784 5.12-1.536 9.728-4.096 13.312-8.704 3.072-3.072 5.12-6.656 6.656-10.752C909.824 736.768 955.392 631.296 955.392 514.56zM481.792 893.952c-0.512-1.024-1.536-1.536-2.56-2.56-47.104-40.96-85.504-89.6-114.176-143.36 38.4-15.872 79.36-25.6 121.856-28.672l0 174.592C485.376 893.952 483.328 893.952 481.792 893.952zM136.192 542.72l113.152 0c3.072 61.44 16.384 121.344 38.912 177.664-21.504 12.288-41.472 26.112-60.928 41.984C175.616 702.464 142.336 626.176 136.192 542.72zM230.4 262.656c18.944 15.36 38.912 28.672 59.392 40.96-23.552 56.832-37.376 118.272-40.448 180.736L136.704 484.352C143.36 399.872 177.664 323.072 230.4 262.656zM549.376 135.168c1.024 1.024 1.536 2.048 3.072 3.072 45.568 39.424 83.456 86.528 111.616 138.24-37.888 15.36-77.824 24.576-118.784 27.648l0-168.96C546.816 135.168 548.352 135.168 549.376 135.168zM895.488 484.352l-113.152 0c-3.584-62.464-17.408-123.392-40.96-180.736 20.992-11.776 40.96-25.6 59.904-40.96C854.528 323.072 888.832 399.872 895.488 484.352zM486.912 484.352 308.224 484.352c3.072-53.76 15.36-105.984 34.816-155.136 45.568 18.944 94.208 30.208 143.872 33.28L486.912 484.352zM486.912 542.72l0 117.76c-50.688 3.072-99.84 14.848-145.92 33.792-18.432-48.128-29.696-99.328-32.768-151.552L486.912 542.72zM545.28 542.72l178.176 0c-3.072 52.736-14.336 103.936-32.768 152.064-46.08-19.456-95.232-30.72-145.408-34.304L545.28 542.72zM545.28 484.352 545.28 362.496c49.664-3.072 98.304-14.336 143.36-32.768 19.456 49.152 31.232 101.376 34.816 154.624L545.28 484.352zM716.8 250.368c-17.408-31.744-37.376-61.952-60.928-90.112 37.888 14.848 72.704 35.84 103.424 61.44C745.472 232.448 731.136 242.176 716.8 250.368zM486.912 134.656l0 168.96c-40.96-3.072-81.408-12.288-118.784-27.648 28.16-51.712 65.536-98.304 111.104-137.728 1.024-1.024 2.56-2.56 3.584-3.584C483.84 135.168 485.376 135.168 486.912 134.656zM315.392 250.368c-14.848-8.704-28.672-18.432-42.496-28.672 30.72-25.6 65.536-46.08 102.912-60.928C352.768 188.416 332.288 218.624 315.392 250.368zM312.832 774.144c17.408 33.28 38.4 65.024 62.464 94.208-38.912-15.36-74.752-37.376-106.496-64C283.136 793.088 297.984 783.36 312.832 774.144zM545.28 894.464l0-174.592c41.984 3.072 82.944 12.8 121.344 28.672-28.672 53.76-67.072 102.4-114.176 143.36-1.024 1.024-1.536 1.536-2.56 2.56C548.352 893.952 546.816 893.952 545.28 894.464zM718.848 774.656c14.848 9.216 29.696 18.944 43.52 30.208-31.232 26.624-67.072 48.128-105.984 63.488C680.448 839.68 701.44 807.936 718.848 774.656zM743.936 720.896c22.528-56.32 35.84-116.736 38.912-178.176L896 542.72c-6.144 83.968-39.936 160.256-91.648 220.672C784.896 747.52 764.928 733.184 743.936 720.896z" p-id="3868"></path></svg>',
  'Crypto':
    '<svg t="1690188605466" style="fill:#008cff" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8869" width="100" height="100"><path d="M830.79979 430.018847 800.485367 430.018847l0-76.725452c0-158.666696-129.818671-288.485367-288.485367-288.485367l-0.001023 0c-158.666696 0-288.485367 129.818671-288.485367 288.485367l0 76.725452-30.314423 0c-19.85214 0-35.945677 16.093537-35.945677 35.945677l0 457.280748c0 19.85214 16.093537 35.945677 35.945677 35.945677l637.599579 0c19.85214 0 35.945677-16.093537 35.945677-35.945677L866.744443 465.964524C866.745467 446.112384 850.65193 430.018847 830.79979 430.018847zM565.119825 717.349925l0 160.572092c0 11.06194-9.05012 20.11206-20.11206 20.11206l-66.015529 0c-11.06194 0-20.11206-9.05012-20.11206-20.11206L458.880175 717.349925c-39.803541-19.61985-67.191308-60.594053-67.191308-107.97006 0-66.446341 53.864792-120.311133 120.311133-120.311133 66.446341 0 120.311133 53.864792 120.311133 120.311133C632.311133 656.756895 604.923366 697.730075 565.119825 717.349925zM742.488465 430.018847 281.511535 430.018847l0-76.725452c0-61.246923 24.063045-119.039163 67.75515-162.732292 43.693128-43.693128 101.485369-67.75515 162.732292-67.75515 61.247946 0 119.040187 24.063045 162.733315 67.75515 43.693128 43.693128 67.75515 101.485369 67.75515 162.732292L742.487442 430.018847z" p-id="8870"></path></svg>',
  'Reverse':
    '<svg t="1690250738236" style="fill: #8000ff;" class="icon" viewBox="0 0 1224 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30805" width="100" height="100"><path d="M826.471107 947.068334l2.578579-2.043402v-166.634596l-264.061101-266.615354 264.061101-266.60319V79.048047l-2.578579-2.554253-431.693072 435.281188 431.693072 435.293352z m0 0" p-id="30806"></path><path d="M431.693072 947.068334l2.554252-2.043402v-166.634596l-264.547625-266.615354 264.547625-266.60319V79.048047l-2.554252-2.554253L0 511.774982l431.693072 435.293352z m0 0M1221.772156 948.284645l2.578579-2.043402v-166.634596l-264.061101-266.615354 264.061101-266.60319V80.264358l-2.578579-2.554253-431.693072 435.281188 431.693072 435.293352z m0 0" p-id="30807"></path></svg>',
  'Pwn': '<svg t="1690251015705" style="fill:#FF4136" class="icon" viewBox="0 0 1024 1024" version="1.1"  xmlns="http://www.w3.org/2000/svg" p-id="32344" width="100"height="100"><path d="M584.219 406.59c-31.975-25.87-70.023-46.224-112.97-58.884-7.109-2.073-14.233-3.833-21.378-5.445-1.745-0.396-3.509-0.777-5.288-1.161-7.054-1.465-14.148-2.779-21.2-3.818-0.538-0.072-1.04-0.107-1.558-0.173-6.703-0.953-13.38-1.628-20.064-2.144-1.73-0.122-3.452-0.28-5.177-0.38-7.033-0.452-14.05-0.731-21.047-0.731-0.74 0-1.445 0.02-2.155 0.02-7.068 0.056-14.08 0.33-21.062 0.812-1.39 0.056-2.784 0.156-4.178 0.243-1.928 0.158-3.804 0.45-5.714 0.658-5.365 0.503-10.709 1.005-16.018 1.78-1.41 0.208-2.82 0.43-4.23 0.675-7.067 1.09-14.126 2.388-21.068 3.945-0.37 0.066-0.775 0.117-1.13 0.223-7.22 1.623-14.325 3.564-21.362 5.653a202.96 202.96 0 0 0-4.304 1.278c-6.922 2.145-13.736 4.477-20.47 7.073-0.948 0.364-1.911 0.76-2.84 1.126-6.312 2.49-12.508 5.136-18.613 8.006-0.948 0.415-1.912 0.811-2.82 1.278a319.46 319.46 0 0 0-19.064 9.912 399.2 399.2 0 0 0-3.787 2.14c-6.272 3.65-12.488 7.438-18.523 11.484-0.218 0.137-0.405 0.295-0.628 0.43-5.868 3.946-11.561 8.18-17.13 12.485-1.079 0.831-2.154 1.643-3.213 2.494a311.133 311.133 0 0 0-16.11 13.761 204.49 204.49 0 0 0-2.784 2.612c-4.933 4.633-9.76 9.405-14.38 14.354-0.445 0.482-0.907 0.933-1.353 1.42-4.828 5.237-9.432 10.684-13.868 16.302-0.942 1.16-1.87 2.317-2.799 3.55-4.345 5.602-8.538 11.357-12.473 17.304-0.502 0.745-0.963 1.543-1.465 2.302-3.615 5.569-7.033 11.307-10.283 17.14-0.614 1.069-1.242 2.144-1.82 3.25-3.393 6.26-6.531 12.69-9.461 19.247-0.614 1.383-1.208 2.767-1.8 4.147-2.896 6.836-5.658 13.73-8.057 20.84-53.153 156.688 40.088 323.836 208.27 373.345 7.13 2.093 14.274 3.858 21.44 5.466 1.702 0.4 3.431 0.775 5.14 1.141 7.123 1.485 14.233 2.784 21.32 3.823 0.488 0.067 0.95 0.122 1.431 0.173 6.72 0.932 13.478 1.607 20.191 2.145 1.708 0.137 3.418 0.28 5.126 0.38 7.054 0.466 14.106 0.726 21.104 0.761 0.719 0 1.444-0.05 2.15-0.05 7.033-0.056 14.05-0.314 21.026-0.782 1.41-0.101 2.804-0.17 4.214-0.28a352.34 352.34 0 0 0 21.692-2.417c1.431-0.223 2.86-0.446 4.312-0.69 7.033-1.106 14.03-2.368 20.95-3.905 0.411-0.106 0.801-0.178 1.186-0.264 7.2-1.623 14.31-3.544 21.327-5.618 1.465-0.43 2.894-0.883 4.365-1.333 6.88-2.13 13.674-4.428 20.393-7.024 1.005-0.395 2.003-0.796 2.987-1.191a330.914 330.914 0 0 0 18.412-7.904c0.987-0.447 1.987-0.877 2.955-1.364 6.475-3.079 12.783-6.384 19.004-9.843 1.297-0.725 2.561-1.47 3.84-2.21 6.25-3.616 12.472-7.383 18.465-11.394 0.264-0.208 0.518-0.4 0.817-0.573 5.79-3.944 11.398-8.077 16.91-12.362 1.09-0.851 2.22-1.678 3.321-2.566a334.079 334.079 0 0 0 16.053-13.69c0.949-0.903 1.891-1.8 2.84-2.698 4.897-4.598 9.648-9.305 14.252-14.233 0.482-0.517 0.963-0.99 1.47-1.522 4.787-5.222 9.371-10.672 13.803-16.205 0.963-1.212 1.91-2.418 2.86-3.65a300.365 300.365 0 0 0 12.432-17.24c0.522-0.797 0.984-1.588 1.5-2.384a278.278 278.278 0 0 0 10.212-17.016c0.63-1.126 1.278-2.237 1.891-3.357a304.726 304.726 0 0 0 9.432-19.178c0.609-1.398 1.207-2.819 1.795-4.202 2.91-6.81 5.658-13.71 8.078-20.799 39.569-116.688-2.08-239.105-95.322-314.498zM269.605 563.224c-34.114 0-61.789-25.785-61.789-57.551 0-31.746 27.675-57.566 61.79-57.566 34.094 0 61.743 25.814 61.743 57.566 0 31.766-27.654 57.55-61.744 57.55z m0 0M651.185 175.994c-62.14-33.896-113.828-1.333-133.593 29.172l-20.119 32.01c-2.414 3.818-3.433 7.99-3.447 12.118-62.718-16.926-116.633-16.773-122.681 1.019-0.63 1.836-0.558 3.823-0.147 5.88l-1.674-0.48-18.578 54.762c7.966-0.518 15.962-0.898 24.04-0.898H375c35.19 0 70.232 5.05 104.102 15.015 42.664 12.569 80.803 32.247 113.579 57.113l18.579-54.817-1.689-0.501c1.618-1.47 2.896-3.08 3.53-4.929 5.12-15.08-25.799-38.217-72.98-56.927 0.8-0.918 1.597-1.815 2.266-2.854l19.918-31.717c3.707-5.703 24.069-33.13 62.62-12.138 1.572 0.862 115.105 62.011 202.348 62.011 4.285 0 8.539-0.156 12.662-0.47l13.137-28.826-22.365-19.33c-46.786 1.196-125.963-26.006-179.522-55.213z m0 0" p-id="32345"></path><path d="M834.153 210.075l40.615-55.43-8.701 36.716 48.377-43.58-19.354 41.759 63.917-30.252-39.29 55.364 31.674-10.061-23.436 20.823 71.11-8.273-72.787 28.295 27.216 7.438-27.914 8.149 56.342 23.46-89.65 2.1 20.301 20.938-28.28-10.178 2.671 13.827-24.365-27.917 20.998 5.352-10.324-12.654 38.239-3.603-28.541-15.482 30.242-14.908-23.403 3.53 10.165-13.25-20.478 5.258 22.895-29.17-37.893 16.082 8.025-23.39-33.35 21.973-5.02-12.916z m0 0" p-id="32346"></path></svg>',
}

export function getRankSvg(ranking) {
  return rankSvgs[ranking]
}

var rankSvgs = [
  '<svg t="1690636834252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="76729" width="32" height="32"><path d="M708.203457 481.121975l-30.467161-53.728395 210.10963-20.41679-165.515062 78.569877a10.966914 10.966914 0 0 1-14.222222-4.424692z m-414.625185 4.424692l-165.420247-78.569877 210.046419 20.48-30.46716 53.728395a10.935309 10.935309 0 0 1-14.190617 4.424692z" fill="#C9851F" p-id="76730"></path><path d="M272.434568 919.703704a53.50716 53.50716 0 1 1 0-106.982716h235.58321V919.703704zM226.070123 758.518519a10.966914 10.966914 0 0 1-10.17679-6.889877l-122.94321-312.541235a66.022716 66.022716 0 0 1-23.640493 4.361482 65.169383 65.169383 0 1 1 65.517037-65.137778 64.663704 64.663704 0 0 1-6.700247 28.665679l165.420247 78.569877a10.998519 10.998519 0 0 0 14.222222-4.487902l30.46716-53.728395 137.513087-242.283456A65.137778 65.137778 0 0 1 507.986173 63.209877v398.000987l-92.665679 92.191605 92.665679 92.191605V758.518519z" fill="#FFD821" p-id="76731"></path><path d="M507.954568 919.703704v-106.856297h235.58321a53.50716 53.50716 0 1 1 0 106.982716z m0-161.185185v-112.924445l92.665679-92.191605-92.665679-92.191605V63.209877a65.359012 65.359012 0 0 1 65.517037 65.200987 65.042963 65.042963 0 0 1-33.311605 56.888889l137.544691 242.283457 30.467161 53.728395a10.966914 10.966914 0 0 0 14.190617 4.487901l165.420247-78.569876a64.632099 64.632099 0 0 1-6.668642-28.665679 65.485432 65.485432 0 1 1 41.876543 60.807901l-123.006419 312.25679a10.840494 10.840494 0 0 1-10.113581 6.889877z" fill="#FFAA29" p-id="76732"></path></svg>',
  '<svg t="1690637833097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1632" width="32" height="32"><path d="M292.119324 491.633778c5.176889 2.446222 11.434667 0.512 14.222223-4.551111l30.72-54.328889-211.626667-20.707556 166.684444 79.587556z m387.015112-58.88l30.72 54.328889c2.844444 5.063111 9.102222 6.997333 14.279111 4.551111l166.684444-79.587556-211.626667 20.707556z" fill="#6C87A9" p-id="1633"></path><path d="M216.627769 877.226667c0 29.866667 24.234667 54.101333 54.158222 54.101333h237.340445v-108.316444H270.785991a54.158222 54.158222 0 0 0-54.158222 54.158222zM508.126436 63.943111a65.991111 65.991111 0 0 0-32.426667 123.448889L337.004658 432.753778l-30.72 54.328889a10.979556 10.979556 0 0 1-14.222222 4.551111l-166.684445-79.587556a65.991111 65.991111 0 1 0-35.441778 32.540445l123.904 316.472889c1.649778 4.209778 5.688889 6.940444 10.24 6.940444h283.989334v-114.346667l-93.297778-93.297777 93.297778-93.354667V64z" fill="#D5E2F0" p-id="1634"></path><path d="M745.409991 823.011556H508.183324v108.316444H745.409991a54.158222 54.158222 0 1 0 0-108.316444z m204.629333-506.026667a65.991111 65.991111 0 0 0-59.278222 95.004444l-166.684444 79.644445a10.979556 10.979556 0 0 1-14.222222-4.551111l-30.72-54.328889-138.581334-245.304889a65.991111 65.991111 0 0 0-32.426666-123.448889v403.000889l93.297777 93.297778-93.297777 93.354666v114.346667h283.989333c4.551111 0 8.533333-2.730667 10.24-6.940444l123.904-316.472889a65.991111 65.991111 0 1 0 23.836444-127.544889z" fill="#96B9DB" p-id="1635"></path></svg>',
  '<svg t="1690637847796" class="icon" viewBox="0 0 1030 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1791" width="32" height="32"><path d="M714.399224 487.14283l-30.899177-54.490249 213.088928-20.578083-167.862021 79.555765a11.154475 11.154475 0 0 1-14.42389-4.487433z m-420.504461 4.487433l-167.765862-79.555765 213.024822 20.738348-30.899176 54.49025a11.090368 11.090368 0 0 1-14.391837 4.487432z" fill="#9B7A3A" p-id="1792"></path><path d="M272.451247 931.366576a54.169719 54.169719 0 1 1 0-108.339437h238.923718v108.339437z m-46.957773-163.470749a11.122422 11.122422 0 0 1-10.321095-6.987573l-124.750618-316.299871a67.05506 67.05506 0 0 1-23.97571 4.423326 65.997308 65.997308 0 1 1 66.446052-65.997308 65.388299 65.388299 0 0 1-6.795255 29.040097l167.765862 79.555765a11.154475 11.154475 0 0 0 14.42389-4.519486l30.899176-54.490249 139.462986-245.302282a65.933202 65.933202 0 0 1 32.69415-123.308229v402.971421l-93.979654 93.338592 93.979654 93.466804v114.365418z" fill="#EACE97" p-id="1793"></path><path d="M511.310859 931.366576v-108.339437h238.923717a54.169719 54.169719 0 1 1 0 108.339437z m0-163.470749v-114.108993l93.979653-93.338592-93.979653-93.466804V64.010017a66.22168 66.22168 0 0 1 66.446051 65.997308 65.837043 65.837043 0 0 1-33.783955 57.471186l139.527092 245.142017 30.899177 54.490249a11.122422 11.122422 0 0 0 14.391836 4.519486l167.765862-79.555765a65.356246 65.356246 0 0 1-6.763201-29.040097 66.446051 66.446051 0 1 1 66.446051 65.997308 66.926848 66.926848 0 0 1-23.97571-4.455379l-124.782671 316.460137a10.994209 10.994209 0 0 1-10.289041 6.987573z" fill="#CEA659" p-id="1794"></path></svg>'
]

export function getCommonSvg(name){
  return commonSvgs[name]
}

var commonSvgs = {
  'container':'<svg t="1690793912170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4665" id="mx_n_1690793912170" data-spm-anchor-id="a313x.7781069.0.i5" width="32" height="32"><path d="M823.59 808.08a18 18 0 0 1-8.92-33.64L885 734.37a17.62 17.62 0 0 0 9-15.26V304.89a17.62 17.62 0 0 0-9-15.26l-127.86-72.8A18 18 0 1 1 775 185.55l127.86 72.79A53.71 53.71 0 0 1 930 304.89v414.22a53.71 53.71 0 0 1-27.15 46.55l-70.37 40.06a17.92 17.92 0 0 1-8.89 2.36zM512 980a54.33 54.33 0 0 1-26.85-7.07l-364-207.24A53.71 53.71 0 0 1 94 719.11V584.28a18 18 0 0 1 36 0v134.83a17.62 17.62 0 0 0 9 15.26l364 207.24a18.32 18.32 0 0 0 18.08 0L722 827.21a18 18 0 1 1 17.81 31.28L538.85 972.9A54.3 54.3 0 0 1 512 980zM112 522.41a18 18 0 0 1-18-18V304.89a53.71 53.71 0 0 1 27.15-46.55l364-207.24a54.5 54.5 0 0 1 53.7 0l133.85 76.2a18 18 0 0 1-17.82 31.29L521 82.39a18.32 18.32 0 0 0-18.08 0L139 289.63a17.62 17.62 0 0 0-9 15.26v199.52a18 18 0 0 1-18 18z" fill="#ffffff" p-id="4666"></path><path d="M512 764.45a54.06 54.06 0 0 1-26.92-7.16L312.39 658a54.15 54.15 0 0 1-27.09-46.82V412.83A54.15 54.15 0 0 1 312.39 366l172.69-99.3a54.22 54.22 0 0 1 53.84 0L711.61 366a54.15 54.15 0 0 1 27.09 46.82v198.35A54.15 54.15 0 0 1 711.61 658l-172.69 99.3a54 54 0 0 1-26.92 7.15z m0-468.91a18 18 0 0 0-9 2.38l-172.7 99.3a18 18 0 0 0-9 15.61v198.34a18 18 0 0 0 9 15.61l172.7 99.3a18.06 18.06 0 0 0 17.94 0l172.7-99.3a18 18 0 0 0 9-15.61V412.83a18 18 0 0 0-9-15.61L521 297.92a18 18 0 0 0-9-2.38z" fill="#ffffff" p-id="4667"></path><path d="M530 746h-36V503.73l208.04-119.44 17.92 31.21L530 524.57V746z" fill="#ffffff" p-id="4668"></path><path d="M304.034 415.482l17.924-31.22L520.964 498.51l-17.924 31.221z" fill="#ffffff" p-id="4669"></path></svg>',
}
