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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9 8H11V14H9V8M13 1H7V3H13V1M17.03 7.39C18.26 8.93 19 10.88 19 13C19 17.97 15 22 10 22C5.03 22 1 17.97 1 13S5.03 4 10 4C12.12 4 14.07 4.74 15.62 6L17.04 4.56C17.55 5 18 5.46 18.45 5.97L17.03 7.39M17 13C17 9.13 13.87 6 10 6S3 9.13 3 13 6.13 20 10 20 17 16.87 17 13M21 7V13H23V7H21M21 17H23V15H21V17Z" fill="{color}"/></svg>