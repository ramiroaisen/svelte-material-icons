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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20 7V13H18V7H20M18 17H20V15H18V17M10 3.25C10 3.25 4 10 4 14C4 17.32 6.69 20 10 20S16 17.31 16 14C16 10 10 3.25 10 3.25M7.75 10C8.44 10 9 10.56 9 11.25S8.44 12.5 7.75 12.5 6.5 11.94 6.5 11.25 7.06 10 7.75 10M12.25 17C11.56 17 11 16.44 11 15.75S11.56 14.5 12.25 14.5 13.5 15.06 13.5 15.75 12.94 17 12.25 17M7.53 17.03L6.47 15.97L12.47 9.97L13.53 11.03L7.53 17.03Z" fill="{color}"/></svg>