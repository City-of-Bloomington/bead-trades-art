<template>
  <div>
    <header>
      <a class="logo" href="https://visitbead.com/" title="BEAD - Bloomington Entertainment & Arts District">
        <img src="/images/bead-logo.svg" alt="BEAD Logo"/>
      </a>

      <h1>Bloomington Trades District Public Art</h1>

      <a class="button" href="https://docs.google.com/forms/d/1W8S_olBKgjhkzj3zm4veF70ANSZGg-lwpr2JmBwnVew/edit?ts=5cbf5c29" title="Provide Feedback">Provide Feedback</a>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(`%c Made with ❤️ via City of Bloomington, ITS `, this.consoleLog)
  },
  data() {
    return {
      consoleLog: ['background-color: rgb(30, 90, 174)',
                   'color: white',
                   'border-radius: 3px',
                   'padding: 5px'
      ].join(';'),
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(33, 33, 33);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  background-color: darken(rgb(33, 33, 33), 2%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;

  h1 {
    color: rgba(225, 225, 225, 0.95);
    letter-spacing: .5px;
    font-weight: 600;
  }

  a {
    &.logo {
      margin: 0 16px 0 0;

      img {
        width: 60px;
      }
    }

    &.button {
      margin-left: auto;
      border: 2px solid transparent;
      color: white;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 3px;
      text-decoration: none;
      background-color: rgba(255, 0, 0, 0);
      background-image: -webkit-linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0.5));
      background-image: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0.5));
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-name: solidColor;
      background-blend-mode: multiply;
      background-repeat: no-repeat;
      background-attachment: fixed;

      @keyframes solidColor {
        0%    { background-color: #955fad; }
        50%   { background-color: #da5b45; }
        100%  { background-color: #955fad; }
      }

      &:hover,
      &:focus {
        border: 2px solid white;
      }
    }
  }
}

@media only screen
and (min-width : 320px)
and (max-width : 480px) {
  header {
    padding: 8px 16px;

    h1 {
      display: none;
    }

    a {
      &.logo {
        margin: 0 16px 0 0;

        img {
          width: 40px;
        }
      }

      &.button {
        font-size: 14px;
      }
    }
  }
}

@media only screen
and (min-width : 481px)
and (max-width : 768px) {
  header {
    padding: 8px 16px;

    h1 {
      display: none;
    }

    a {
      &.logo {
        margin: 0 16px 0 0;

        img {
          width: 40px;
        }
      }

      &.button {
        font-size: 14px;
      }
    }
  }
}
</style>