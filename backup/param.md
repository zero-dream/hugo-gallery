# Param

# --------------------------------------------------

site.Params (.Site.Params)
site.Param (.Site.Param)
-> hugoToml.params

# --------------------------------------------------

.Params
-> frontMatter.params
-> frontMatter
-> frontMatter.cascade.params
-> hugoToml.cascade.params

.Param
-> frontMatter.params
-> frontMatter
-> frontMatter.cascade.params
-> hugoToml.cascade.params
-> hugoToml.params

# --------------------------------------------------
