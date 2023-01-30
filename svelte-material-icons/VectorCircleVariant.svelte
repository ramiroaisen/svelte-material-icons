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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22,9H19.97C18.7,5.41 15.31,3 11.5,3A9,9 0 0,0 2.5,12C2.5,17 6.53,21 11.5,21C15.31,21 18.7,18.6 20,15H22M20,11V13H18V11M17.82,15C16.66,17.44 14.2,19 11.5,19C7.64,19 4.5,15.87 4.5,12C4.5,8.14 7.64,5 11.5,5C14.2,5 16.66,6.57 17.81,9H16V15" fill="{color}"/></svg>