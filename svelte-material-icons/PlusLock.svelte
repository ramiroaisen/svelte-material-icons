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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21.14 17.67V17.22C21.14 16 20.2 15 19 15S16.86 16 16.86 17.22V17.67C16.34 17.67 16 18 16 18.56V22.11C16 22.65 16.34 23 16.86 23H21.14C21.66 23 22 22.65 22 22.11V18.55C22 18 21.66 17.67 21.14 17.67M20.29 17.67H17.72V17.22C17.72 16.5 18.31 15.89 19 15.89C19.69 15.89 20.29 16.5 20.29 17.22V17.67M11 5V11H5V13H11V19H13V13H19V11H13V5H11Z" fill="{color}"/></svg>