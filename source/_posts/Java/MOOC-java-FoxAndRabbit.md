---
title: MOOC浙大翁凯教授Java第六章狐狸与兔子源代码
date: 2020-08-23 20:54:56
categories:
  - Java
tags: Java
cover: https://gitee.com/Weidows/Weidows/raw/master/java/src/main/java/twenty/july/my_interface/interface/Cells173751.png
---

<!--
 * @Author: Weidows
 * @Date: 2020-08-23 20:54:56
 * @LastEditors: Weidows
 * @LastEditTime: 2021-02-13 17:14:16
 * @FilePath: \Weidowsd:\Game\Github\Blog-private\source\_posts\Java\MOOC-java-FoxAndRabbit.md
-->

- [一.简介](#一简介)
- [二.代码片段](#二代码片段)
- [Animal](#animal)
- [Fox](#fox)
- [Rabbit](#rabbit)
- [Cell](#cell)
- [Field](#field)
- [Location](#location)
- [View](#view)
- [FoxAndRabbit](#foxandrabbit)

# 一.简介

由于老师在课程中没给出源代码,有些知识点没有涉及到,需要源码作为参考,但是个人百度谷歌了半天没找到真正所需要的(甚至有人卖...)

这篇给出的是 _6.3_ 的源码,如果 **寻找第七章的或者其他的** 可以去我的 GitHub 仓库上找,已经给出介绍了
[仓库地址](https://github.com/Weidows/Weidows)

如果复制代码的话需要改一下 Package 和 import

# 二.代码片段

![目录结构](https://img-blog.csdnimg.cn/20200727081719904.jpg#pic_center)

# Animal

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-20 14:25:10
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-25 17:40:28
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\animal\Animal.java
 */
package twenty.july.my_interface.animal;

import java.util.ArrayList;

import twenty.july.my_interface.field.Location;

public abstract class Animal {
  private int ageLimit;
  private int breedableAge;
  private int age;
  private boolean isAlive = true;

  public Animal(int ageLimit, int breedableAge) {
    this.ageLimit = ageLimit;
    this.breedableAge = breedableAge;
  }

  protected int getAge() {
    return age;
  }

  protected double getAgePercent() {
    return (double) age / (double) ageLimit;
  }

  public abstract Animal breed();

  public void grow() {
    age++;
    if (age >= ageLimit)
      die();
  }

  public void die() {
    isAlive = false;
  }

  public boolean isAlive() {
    return isAlive;
  }

  public boolean isBreedable() {
    return (age >= breedableAge);
  }

  public Location move(Location[] freeAdj) {
    Location ret = null;
    if (freeAdj.length > 0 && Math.random() < 0.02) {
      ret = freeAdj[(int) (Math.random() * freeAdj.length)];
    }
    return ret;
  }

  @Override
  public String toString() {
    return "" + age + ":" + (isAlive ? "live" : "dead");
  }

  public Animal feed(ArrayList<Animal> neighbor) {
    return null;
  }

  protected void longerLife(int inc) {
    ageLimit += inc;
  }

}
```

# Fox

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-20 14:31:09
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-25 17:40:18
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\animal\Fox.java
 */
package twenty.july.my_interface.animal;

import java.awt.Graphics;

import java.awt.Color;
import java.util.ArrayList;

import twenty.july.my_interface.cell.Cell;

/**
 * *Fox实现接口Cell,使Fox对象能间接传给Field
 */
public class Fox extends Animal implements Cell {
  public Fox() {
    super(20, 4);
  }

  @Override // 实现接口Cell中的draw()
  public void draw(Graphics g, int x, int y, int size) {
    int alpha = (int) ((1 - getAgePercent()) * 255);
    g.setColor(new Color(0, 0, 0, alpha));
    g.fillRect(x, y, size, size);
  }

  @Override
  public Animal breed() {
    Animal ret = null;
    if (isBreedable() && Math.random() < 0.05) {
      ret = new Fox();
    }
    return ret;
  }

  @Override
  public String toString() {
    return ("Fox:" + super.toString());
  }

  @Override
  public Animal feed(ArrayList<Animal> neighbor) {
    Animal ret = null;
    if (Math.random() < 0.2) {
      ret = neighbor.get((int) (Math.random() * neighbor.size()));
      longerLife(2);
    }
    return ret;
  }
}
```

# Rabbit

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-20 18:49:07
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-25 17:40:09
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\animal\Rabbit.java
 */
package twenty.july.my_interface.animal;

import java.awt.Color;
import java.awt.Graphics;

import twenty.july.my_interface.cell.Cell;

public class Rabbit extends Animal implements Cell {
  public Rabbit() {
    super(10, 2); // *寿命&&生育年龄
  }

  @Override
  public void draw(Graphics g, int x, int y, int size) {
    int alpha = (int) ((1 - getAgePercent()) * 255);
    g.setColor(new Color(255, 0, 0, alpha));
    g.fillRect(x, y, size, size);
  }

  @Override
  public Animal breed() {
    Animal ret = null;
    if (isBreedable() && Math.random() < 0.12) {
      ret = new Rabbit();
    }
    return ret;
  }

  @Override
  public String toString() {
    return "Rabbit" + super.toString();
  }
}
```

# Cell

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-12 15:17:05
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-25 17:39:41
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\cell\Cell.java
 */

package twenty.july.my_interface.cell;

import java.awt.Graphics;
public interface Cell {//注意这里不能写成interface class
  /**
   * *Cell是一个接口而非类(接口是一种完全抽象的抽象类)
   * !这个接口就是为了实现Fox和Rabbit类new的对象能够传递给Field类
   * Field类中指明需要的对象的类是Cell而Cell是作为中间承接者
   * Fox和Rabbit类需要有implements Cell语句来实现接口
   */
  /**
   * !注意这里函数可以不用写函数前缀,只需要写返回值类型
   * 抽象类无函数主体,只需声明函数原型,实现抽象类/接口的类都必须Override所有抽象方法,否则此子类仍为抽象类
   * abstract与final是冲突对立关系,抽象是用来被继承或重写的,final相反是不让继承/重写的
   */
  void draw(Graphics g, int x, int y, int size);
}
```

# Field

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-12 15:17:00
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-24 22:20:12
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\field\Field.java
 */
package twenty.july.my_interface.field;

import java.util.ArrayList;

import twenty.july.my_interface.cell.Cell;

public class Field {
  private int width;
  private int height;
  private Cell[][] field;// 声明有这么个数组变量,但未承接任何对象
  private static final Location[] adjacent = {
    new Location(-1, -1), new Location(-1, 0), new Location(-1, 1),
    new Location(0, -1), new Location(0, 0), new Location(0, 1),
    new Location(1, -1), new Location(1, 0),new Location(1, 1),
  };

  public Field(int width, int height) {
    this.width = width;
    this.height = height;
    field = new Cell[height][width];
  }

  public int getWidth() {
    return width;
  }

  public int getHeight() {
    return height;
  }

  public Cell place(int row, int col, Cell cell) {
    // !这里的Cell o并非Cell类的对象,而是实现了Cell接口的对象
    field[row][col] = cell;
    Cell ret = field[row][col];
    return ret;
  }

  public Cell get(int row, int col) {
    return field[row][col];
  }

  public Cell[] getNeighbor(int row, int col) {
    ArrayList<Cell> list = new ArrayList<Cell>();
    for (int i = -1; i < 2; i++) {
      for (int j = -1; j < 2; j++) {
        int r = row + i;
        int c = col + j;
        if (r > -1 && r < height && c > -1 && c < width && !(r == row && c == col)) {
          list.add(field[r][c]);
        }
      }
    }
    return list.toArray(new Cell[list.size()]);
  }

  public Location[] getFreeNeighbor(int row, int col) {
    ArrayList<Location> list = new ArrayList<Location>();
    for (Location loc : adjacent) {
      int r = row + loc.getRow();
      int c = col + loc.getCol();
      if (r > -1 && r < height && c > -1 && c < width && field[r][c] == null) {
        list.add(new Location(r, c));
      }
    }
    // !学着点
    return list.toArray(new Location[list.size()]);
  }

  public boolean placeRandomAdj(int row, int col, Cell cell) {
    boolean ret = false;
    Location[] freeAdj = getFreeNeighbor(row, col);
    if (freeAdj.length > 0) {
      int idx = (int) (Math.random() * freeAdj.length);
      field[freeAdj[idx].getRow()][freeAdj[idx].getCol()] = cell;
      ret = true;
    }
    return ret;
  }

  public void clear() {
    for (int i = 0; i < height; i++) {
      for (int j = 0; j < width; j++) {
        field[i][j] = null;
      }
    }
  }

  public void remove(Cell fed) {
    for (int row = 0; row < height; row++) {
      for (int col = 0; col < width; col++) {
        if (field[row][col] == fed) {
          field[row][col] = null;
          break;
        }
      }
    }
  }

  public Cell remove(int row, int col) { // *函数重构
    field[row][col] = null;
    Cell ret = field[row][col];
    return ret;
  }

  public void move(int row, int col, Location loc) {
    field[loc.getRow()][loc.getCol()] = field[row][col];
    remove(row, col);
  }
}
```

# Location

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-22 18:51:49
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-25 17:39:16
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\field\Location.java
 */
package twenty.july.my_interface.field;

public class Location {
  private int row;
  private int col;

  public Location(int row, int col) {
    this.row = row;
    this.col = col;
  }

  public int getRow() {
    return row;
  }

  public int getCol() {
    return col;
  }
}
```

# View

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-12 15:17:00
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-24 11:06:21
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\field\View.java
 */
package twenty.july.my_interface.field;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;

import javax.swing.JPanel;

import twenty.july.my_interface.cell.Cell;

public class View extends JPanel {
  private static final long serialVersionUID = -2417015700213488315L;
  private static final int GRID_SIZE = 16;
  private Field theField;

  // *构造函数
  public View(Field field) {
    theField = field;
  }

  @Override
  public void paint(Graphics g) {
    super.paint(g);
    g.setColor(Color.GRAY);
    for (int row = 0; row < theField.getHeight(); row++)
      g.drawLine(0, row * GRID_SIZE, theField.getWidth() * GRID_SIZE, row * GRID_SIZE);
    for ( int col = 0; col<theField.getWidth(); col++ )
      g.drawLine(col * GRID_SIZE, 0, col * GRID_SIZE, theField.getHeight() * GRID_SIZE);
    for (int row = 0; row < theField.getHeight(); row++) {
      for (int col = 0; col < theField.getWidth(); col++) {
        Cell cell = theField.get(row, col);
        if (cell != null)
          cell.draw(g, col * GRID_SIZE, row * GRID_SIZE, GRID_SIZE);
      }
    }
  }

  @Override
  public Dimension getPreferredSize() {
    return new Dimension(theField.getWidth() * GRID_SIZE + 1, theField.getHeight() * GRID_SIZE + 1);
  }
}
```

# FoxAndRabbit

```java
/*
 * @Author: Weidows
 * @Date: 2020-07-20 18:40:10
 * @LastEditors: Weidows
 * @LastEditTime: 2020-07-24 13:23:07
 * @FilePath: \Weidows\Java\src\main\java\twenty\july\my_interface\fox_and_rabbit\FoxAndRabbit.java
 */
package twenty.july.my_interface.fox_and_rabbit;

import java.util.ArrayList;

import javax.swing.JFrame;

import twenty.july.my_interface.animal.*;
import twenty.july.my_interface.cell.Cell;
import twenty.july.my_interface.field.*;

public class FoxAndRabbit {
  private Field theField;
  private View theView;

  public FoxAndRabbit(int size) {
    theField = new Field(size, size);
    for (int row = 0; row < theField.getHeight(); row++) {
      for (int col = 0; col < theField.getWidth(); col++) {
        double probability = Math.random();
        if (probability < 0.05) {
          theField.place(row, col, new Fox());
        } else if (probability < 0.15) {
          theField.place(row, col, new Rabbit());
        }
      }
    }
    theView = new View(theField);
    JFrame frame = new JFrame();
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setResizable(false);
    frame.setTitle("Cells");
    frame.add(theView);
    frame.pack();
    frame.setVisible(true);
  }

  public void start(int steps) {
    for (int i = 0; i < steps; i++) {
      step();
      theView.repaint();
      try {
        Thread.sleep(200);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }

  public void step() {
    for (int row = 0; row < theField.getHeight(); row++) {
      for (int col = 0; col < theField.getWidth(); col++) {
        Cell cell = (Cell) theField.get(row, col);
        if (cell != null) {
          Animal animal = (Animal) cell;
          animal.grow();
          if (animal.isAlive()) {
            // *move
            Location loc = animal.move(theField.getFreeNeighbor(row, col));
            if (loc != null)
              theField.move(row, col, loc);
            // *eat
            Cell[] neighbor = (Cell[]) theField.getNeighbor(row, col);
            ArrayList<Animal> listRabbit = new ArrayList<Animal>();
            for (Cell an : neighbor) {
              if (an instanceof Rabbit) {
                listRabbit.add((Rabbit) an);
              }
            }
            if (!listRabbit.isEmpty()) {
              Animal fed = animal.feed(listRabbit);
              if (fed != null)
                theField.remove((Cell) fed);
            }
            // *breed
            Animal baby = animal.breed();
            if (baby != null) {
              theField.placeRandomAdj(row, col, (Cell) baby);
            }
          } else {
            theField.remove(row, col);
          }
        }
      }
    }
  }

  public static void main(String[] args) {
    FoxAndRabbit fnr = new FoxAndRabbit(50);
    fnr.start(100);
  }
}
```
