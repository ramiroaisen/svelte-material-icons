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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 17H14V19H17V22H19V19H22V17H19V14H17V17M12 18C12 14.69 14.69 12 18 12C18.77 12 19.5 12.15 20.17 12.41C21.63 7.9 20.7 3.3 20.7 3.3S19.3 3 17.2 3C11.7 3 1.6 5.1 3.2 20.8C4.3 20.9 5.4 21 6.4 21C8.76 21 10.74 20.69 12.41 20.15C12.15 19.5 12 18.76 12 18M7 17C7 17 7 7 17 7C17 7 11 9 7 17Z" fill="{color}"/></svg>