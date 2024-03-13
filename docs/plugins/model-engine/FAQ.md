---
sidebar_position: 2
title: 常见问题
description: 这里包含了你可能遇到的问题的解决方案。
---

---

### 模型出现XXX错误/警告

请查看控制台。错误日志会逐步指引您找到问题的原因和解决方案，并为您提供有关问题本身的额外见解。

### 模型无故受到伤害

"眼睛高度"要么缺失，要么设置为低于0。要解决此问题，请将碰撞箱的骨骼中心点调整至高于0。
您可以在[**此处**](/Modeling/Creating-a-Model#hitbox-and-eye-height)了解更多信息。

### 模型显示为普通物品

请使用生成的资源包，位于插件文件夹中。

> 插件文件夹位于 `<服务器主目录>/plugins/ModelEngine/resource pack.zip`。

### 模型使用了其他模型的部件

请更新资源包。

### 我希望我的模型实体执行自定义攻击动画

虽然您可以使用带有 onAttack 触发器的状态，但攻击动画开始和伤害之间没有延迟，
因此需要不同的解决方案。一种流行而有效的方法是：
- 取消攻击事件
- 播放状态
- 延迟技能树的执行
- 造成伤害

通常，这通过某种形式使用以下基本元技能来完成：

```yaml
ExampleMob:
  Type: ZOMBIE
  Skills:
  - model{mid=examplemob} @self ~onSpawn
  - skill{s=ExampleModelAttack;sync=true} @self ~onAttack 
```

```yaml
ExampleModelAttack:
  Skills:
  - cancelevent
  - state{...}
  - delay 17
  - damage{...} @trigger
```

### 如何创建多行名称？

您不能简单地在显示名称中使用 `<&nl>` 或 `\n`

您需要创建多个[标签骨骼](/Modeling/Bone-Behaviors#nametag)，
然后通过[SetModelTag](/MythicMobs/mechanics/model/SetModelTag)机制将所需文本应用到它们上。