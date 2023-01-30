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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 3H9V1H15V3M11 14H13V8H11V14M13.05 19.91C12.71 19.97 12.36 20 12 20C8.13 20 5 16.87 5 13S8.13 6 12 6C15.17 6 17.85 8.11 18.71 11H20.77C20.46 9.66 19.86 8.43 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C12.42 22 12.83 21.96 13.24 21.91C13.09 21.46 13 21 13 20.5C13 20.3 13.03 20.11 13.05 19.91M18.5 13V18.21C18.19 18.07 17.86 18 17.5 18C16.12 18 15 19.12 15 20.5S16.12 23 17.5 23 20 21.88 20 20.5V15H22V13H18.5Z" fill="{color}"/></svg>