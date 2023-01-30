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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18.45 5.97C18 5.46 17.55 5 17.04 4.56L15.62 6C14.07 4.74 12.12 4 10 4C5.03 4 1 8.03 1 13S5.03 22 10 22C15 22 19 17.97 19 13C19 10.88 18.26 8.93 17.03 7.39L18.45 5.97M11 14H9V7H11V14M13 3H7V1H13V3M23 7V13H21V7H23M21 15H23V17H21V15Z" fill="{color}"/></svg>