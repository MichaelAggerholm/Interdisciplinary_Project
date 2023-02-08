<?php

namespace App\Entity;

use App\Repository\HardwarePlacementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HardwarePlacementRepository::class)]
class HardwarePlacement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdDate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $editedDate = null;

    #[ORM\OneToMany(mappedBy: 'hardwarePlacementId', targetEntity: HardwareUnit::class, orphanRemoval: true)]
    private Collection $hardwareUnits;

    public function __construct()
    {
        $this->hardwareUnits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->createdDate;
    }

    public function setCreatedDate(\DateTimeInterface $createdDate): self
    {
        $this->createdDate = $createdDate;

        return $this;
    }

    public function getEditedDate(): ?\DateTimeInterface
    {
        return $this->editedDate;
    }

    public function setEditedDate(\DateTimeInterface $editedDate): self
    {
        $this->editedDate = $editedDate;

        return $this;
    }

    /**
     * @return Collection<int, HardwareUnit>
     */
    public function getHardwareUnits(): Collection
    {
        return $this->hardwareUnits;
    }

    public function addHardwareUnit(HardwareUnit $hardwareUnit): self
    {
        if (!$this->hardwareUnits->contains($hardwareUnit)) {
            $this->hardwareUnits->add($hardwareUnit);
            $hardwareUnit->setHardwarePlacementId($this);
        }

        return $this;
    }

    public function removeHardwareUnit(HardwareUnit $hardwareUnit): self
    {
        if ($this->hardwareUnits->removeElement($hardwareUnit)) {
            // set the owning side to null (unless already changed)
            if ($hardwareUnit->getHardwarePlacementId() === $this) {
                $hardwareUnit->setHardwarePlacementId(null);
            }
        }

        return $this;
    }
}
