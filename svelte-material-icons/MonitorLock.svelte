<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.5,13A2.5,2.5 0 0,1 23,15.5V16A1,1 0 0,1 24,17V21A1,1 0 0,1 23,22H18A1,1 0 0,1 17,21V17A1,1 0 0,1 18,16V15.5A2.5,2.5 0 0,1 20.5,13M20.5,14A1.5,1.5 0 0,0 19,15.5V16H22V15.5A1.5,1.5 0 0,0 20.5,14M20,4H2V16H15V18H13V20H15V22H7V20H9V18H2C0.89,18 0,17.1 0,16V4C0,2.89 0.89,2 2,2H20A2,2 0 0,1 22,4V11.53C21.41,11.19 20.73,11 20,11V4Z" fill="{color}"/></svg>