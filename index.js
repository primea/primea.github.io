import 'tachyons'
import 'tachyons-base/css/tachyons-base.css'
import bel from 'bel'

const textarea = bel`
<div class="fl w-100">
  <svg class="fl w-100" width="300" height="300" viewBox="0 0 475 300" transform="scale(1, -1)"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M 200 200 L 284 200 L 242 122 z"
          fill="none" stroke="none" stroke-width="3" />
    <circle cx="200" cy="200" r="15"/>
    <circle cx="284" cy="200" r="15"/>
    <circle cx="242" cy="122" r="15"/>
  </svg>
</div>
`

const footer = bel`
<footer class="flex items-center justify-center pa4 lh-copy">
  <a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="https://www.github.com/primea">source code</a>
</footer>
`

document.body.appendChild(textarea)
document.body.appendChild(footer)
