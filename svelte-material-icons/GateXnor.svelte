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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2,4C5,10 5,14 2,20H4C7,14 7,10 4.1,4H2M6,4C9,10 9,14 6,20H9C12.2,20 14.8,16.8 16.7,14C17.28,14.65 18.12,15 19,15A3,3 0 0,0 22,12A3,3 0 0,0 19,9C18.12,9 17.28,9.35 16.7,10C14.7,7.2 12.2,4 9,4H6M9,6C12,6 14,10 15.5,12C14,14 12,18 9,18C10.6,14 10.6,10 9,6M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13A1,1 0 0,1 18,12C18,11.5 18.5,11 19,11Z" fill="{color}"/></svg>